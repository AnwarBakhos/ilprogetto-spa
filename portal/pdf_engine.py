"""
IL Progetto PDF Engine v3
- generate_estimate_pdf: client-facing quote with prices
- generate_production_sheet: install team sheet, NO prices
"""
from reportlab.lib.pagesizes import letter
from reportlab.platypus import SimpleDocTemplate, Table, TableStyle, Paragraph, Spacer, HRFlowable
from reportlab.lib.styles import ParagraphStyle
from reportlab.lib import colors
from reportlab.lib.units import inch
from reportlab.lib.enums import TA_RIGHT, TA_CENTER, TA_LEFT
import io
from datetime import datetime

NAVY  = colors.HexColor("#0f2550")
GOLD  = colors.HexColor("#c5a040")
GRAY  = colors.HexColor("#94a3b8")
LIGHT = colors.HexColor("#f8fafc")
DARK  = colors.HexColor("#1e293b")
LINE  = colors.HexColor("#e2e8f0")
RED   = colors.HexColor("#ef4444")
WHITE = colors.white
GREEN = colors.HexColor("#22c55e")

def _P(text, fs=9, font="Helvetica", color=DARK, align=TA_LEFT, **kw):
    if "leading" not in kw: kw["leading"] = fs * 1.35
    s = ParagraphStyle("_", fontSize=fs, fontName=font, textColor=color,
                       alignment=align, **kw)
    return Paragraph(str(text), s)

def _build_doc(buf):
    return SimpleDocTemplate(buf, pagesize=letter,
        leftMargin=0.6*inch, rightMargin=0.6*inch,
        topMargin=0.6*inch, bottomMargin=0.6*inch)

def _header_block(project, label="ESTIMATE"):
    """Shared header for both PDF types."""
    est_num = project.get("estimate_number","—")
    issue   = project.get("issue_date", datetime.today().strftime("%B %d, %Y"))
    expiry  = project.get("expiry_date","")

    left = [
        _P("<b>IL PROGETTO LLC</b>", fs=20, font="Helvetica-Bold", color=NAVY),
        _P("ELITE WINDOW TREATMENTS", fs=7, font="Helvetica-Bold", color=GOLD,
           spaceBefore=2, spaceAfter=6),
        _P("11195 Florindo Rd  •  San Diego, CA 92127", fs=8, color=GRAY),
        _P("info@ilprogettollc.com  •  (858) 000-0000", fs=8, color=GRAY),
    ]
    right_items = [
        _P(f"<b>{label}</b>", fs=26, font="Helvetica-Bold", color=NAVY, align=TA_RIGHT),
        _P(f"<b>No. {est_num}</b>", fs=9, font="Helvetica-Bold",
           color=DARK, align=TA_RIGHT, spaceBefore=4),
        _P(f"Issue Date: {issue}", fs=8, color=GRAY, align=TA_RIGHT),
    ]
    if expiry and label == "ESTIMATE":
        right_items.append(_P(f"Valid Until: {expiry}", fs=8, color=GOLD, align=TA_RIGHT))

    hdr = Table([[left, right_items]], colWidths=[4.3*inch, 3.0*inch])
    hdr.setStyle(TableStyle([
        ("VALIGN",(0,0),(-1,-1),"TOP"),
        ("LEFTPADDING",(0,0),(-1,-1),0),
        ("RIGHTPADDING",(0,0),(-1,-1),0),
        ("TOPPADDING",(0,0),(-1,-1),0),
        ("BOTTOMPADDING",(0,0),(-1,-1),0),
    ]))
    return hdr

def _client_block(project):
    """Client info + project status block."""
    status = project.get("status","draft").upper()
    sc = {"DRAFT":"#94a3b8","SENT":"#3b82f6","APPROVED":"#22c55e",
          "ORDERED":"#f59e0b","INSTALLED":"#10b981"}.get(status,"#94a3b8")

    # Build address lines
    addr_parts = []
    if project.get("address_street"): addr_parts.append(project["address_street"])
    city_line = " ".join(filter(None,[
        project.get("address_city",""),
        project.get("address_state",""),
        project.get("address_zip","")
    ]))
    if city_line: addr_parts.append(city_line)

    left_items = [
        _P("BILL TO", fs=7, font="Helvetica-Bold", color=GRAY, spaceAfter=4),
        _P(f"<b>{project.get('name','')}</b>", fs=13, font="Helvetica-Bold", color=DARK),
    ]
    for line in addr_parts:
        left_items.append(_P(line, fs=8, color=GRAY, spaceBefore=2))
    if project.get("phone"):
        left_items.append(_P(f"📞 {project['phone']}", fs=8, color=GRAY, spaceBefore=3))
    if project.get("email"):
        left_items.append(_P(f"✉ {project['email']}", fs=8, color=GRAY))

    right_items = [
        _P("PROJECT STATUS", fs=7, font="Helvetica-Bold", color=GRAY, spaceAfter=4),
        _P(f'<font color="{sc}"><b>{status}</b></font>',
           fs=11, font="Helvetica-Bold"),
        Spacer(1, 8),
        _P("TAX RATE", fs=7, font="Helvetica-Bold", color=GRAY, spaceAfter=2),
        _P(f"{round(project.get('tax_rate_pct', 7.75), 4)}%", fs=9, color=DARK),
    ]
    if project.get("address_zip"):
        right_items.append(_P(f"ZIP {project['address_zip']}", fs=8, color=GRAY))

    info = Table([[left_items, right_items]], colWidths=[3.8*inch, 3.5*inch])
    info.setStyle(TableStyle([
        ("VALIGN",(0,0),(-1,-1),"TOP"),
        ("LEFTPADDING",(0,0),(-1,-1),0),
        ("RIGHTPADDING",(0,0),(-1,-1),0),
        ("BACKGROUND",(1,0),(1,0),LIGHT),
        ("LEFTPADDING",(1,0),(1,0),14),
        ("TOPPADDING",(1,0),(1,0),12),
        ("BOTTOMPADDING",(1,0),(1,0),12),
        ("RIGHTPADDING",(1,0),(1,0),14),
    ]))
    return info

def generate_estimate_pdf(project: dict) -> bytes:
    """Client-facing quote — with prices."""
    buf = io.BytesIO()
    doc = _build_doc(buf)
    els = []

    els.append(_header_block(project, "ESTIMATE"))
    els.append(HRFlowable(width="100%", thickness=2, color=GOLD,
                          spaceBefore=10, spaceAfter=14))
    els.append(_client_block(project))
    els.append(Spacer(1, 20))

    # ── Line items table ──────────────────────────────────────────────────────
    def H(t, align=TA_LEFT):
        return _P(f"<b>{t}</b>", fs=7, font="Helvetica-Bold", color=WHITE, align=align)

    rows = [[H("#"), H("ROOM / LABEL"), H("SPECIFICATIONS"), H("OPERATION"), H("PRICE", TA_RIGHT)]]

    for i, s in enumerate(project.get("shades", []), 1):
        specs = [f"{float(s['width']):.1f}\" × {float(s['height']):.1f}\""]
        if s.get("reverse_roll"):         specs.append("Reverse Roll")
        if s.get("cassette_with_fabric"): specs.append("Cassette w/ Fabric")
        if s.get("remove_old"):           specs.append("Remove Existing")
        if s.get("haul_away"):            specs.append("Haul Away")
        specs.append(f"Fabric: {s.get('fabric_code','TBD')}")
        if s.get("notes"):                specs.append(f"Note: {s['notes']}")

        rows.append([
            _P(str(i), fs=8, color=GRAY),
            [_P(f"<b>{s.get('label','Room')}</b>", fs=9,
                font="Helvetica-Bold", color=DARK),
             _P(f"{s.get('treatment','')} Shade", fs=8, color=GRAY, spaceBefore=2)],
            _P("<br/>".join(specs), fs=7.5, color=GRAY, leading=11),
            _P(s.get("operation","manual").title(), fs=8, color=DARK),
            _P(f"${s.get('price',0):,.0f}", fs=9,
               font="Helvetica-Bold", color=DARK, align=TA_RIGHT),
        ])

    tbl = Table(rows, colWidths=[0.3*inch, 1.7*inch, 2.85*inch, 1.0*inch, 1.45*inch])
    tbl.setStyle(TableStyle([
        ("BACKGROUND",(0,0),(-1,0),NAVY),
        ("TOPPADDING",(0,0),(-1,0),9), ("BOTTOMPADDING",(0,0),(-1,0),9),
        ("LEFTPADDING",(0,0),(-1,0),8), ("RIGHTPADDING",(0,0),(-1,0),8),
        ("TOPPADDING",(0,1),(-1,-1),10), ("BOTTOMPADDING",(0,1),(-1,-1),10),
        ("LEFTPADDING",(0,1),(-1,-1),8), ("RIGHTPADDING",(0,1),(-1,-1),8),
        ("VALIGN",(0,0),(-1,-1),"TOP"),
        ("ROWBACKGROUNDS",(0,1),(-1,-1),[WHITE, LIGHT]),
        ("LINEBELOW",(0,0),(-1,-1),0.5,LINE),
        ("ALIGN",(4,0),(4,-1),"RIGHT"),
    ]))
    els.append(tbl)
    els.append(Spacer(1, 18))

    # ── Totals ────────────────────────────────────────────────────────────────
    subtotal = project.get("subtotal", 0)
    discount = project.get("discount", 0)
    tax      = project.get("tax", 0)
    total    = project.get("total", 0)
    has_disc = project.get("has_discount", False)

    def TR(label, value, bold=False, val_color=DARK):
        lkw = dict(fs=9 if not bold else 12, font="Helvetica-Bold" if bold else "Helvetica",
                   color=NAVY if bold else GRAY, align=TA_RIGHT)
        vkw = dict(fs=9 if not bold else 14, font="Helvetica-Bold" if bold else "Helvetica",
                   color=val_color if not bold else GOLD, align=TA_RIGHT)
        return [_P(label, **lkw), _P(value, **vkw)]

    disc_type  = project.get("discount_type")
    disc_value = project.get("discount_value")
    if disc_type == "flat":
        disc_label = f"Discount (${disc_value:,.0f} flat)"
    else:
        disc_label = f"Discount ({disc_value:.0f}%)" if disc_value else "Discount"

    total_rows = [TR("Subtotal", f"${subtotal:,.2f}")]
    if has_disc:
        total_rows.append(TR(disc_label, f"−${discount:,.2f}", val_color=RED))
    tax_pct = round(project.get("tax_rate_pct", 7.75), 2)
    total_rows.append(TR(f"Sales Tax ({tax_pct}%)", f"${tax:,.2f}"))
    total_rows.append(TR("<b>TOTAL DUE</b>", f"<b>${total:,.0f}</b>", bold=True))

    totals = Table(total_rows, colWidths=[5.65*inch, 1.65*inch])
    totals.setStyle(TableStyle([
        ("ALIGN",(0,0),(-1,-1),"RIGHT"),
        ("TOPPADDING",(0,0),(-1,-1),6), ("BOTTOMPADDING",(0,0),(-1,-1),6),
        ("LINEABOVE",(0,-1),(-1,-1),2,GOLD),
        ("TOPPADDING",(0,-1),(-1,-1),12), ("BOTTOMPADDING",(0,-1),(-1,-1),10),
        ("BACKGROUND",(0,-1),(-1,-1),LIGHT),
    ]))
    els.append(totals)

    if project.get("notes"):
        els.append(Spacer(1,20))
        els.append(HRFlowable(width="100%",thickness=0.5,color=LINE,spaceAfter=8))
        els.append(_P("PROJECT NOTES", fs=7, font="Helvetica-Bold", color=GRAY, spaceAfter=4))
        els.append(_P(project["notes"], fs=8, color=DARK,
                      font="Helvetica-Oblique", leading=12))

    expiry = project.get("expiry_date","30 days from issue")
    els.append(Spacer(1,30))
    els.append(HRFlowable(width="100%",thickness=0.5,color=LINE,spaceAfter=8))
    els.append(_P(
        f"This estimate is valid until {expiry}. "
        "Prices subject to change based on final measurements. "
        "IL Progetto LLC — Licensed &amp; Insured • San Diego, CA 92127",
        fs=7, color=GRAY, align=TA_CENTER))

    doc.build(els)
    buf.seek(0)
    return buf.read()


def generate_production_sheet(project: dict) -> bytes:
    """Production/installation sheet — NO prices, full specs."""
    buf = io.BytesIO()
    doc = _build_doc(buf)
    els = []

    els.append(_header_block(project, "PRODUCTION SHEET"))
    els.append(HRFlowable(width="100%", thickness=2, color=NAVY,
                          spaceBefore=10, spaceAfter=14))

    # Simplified client block (no status/tax — install team doesn't need that)
    addr_parts = []
    if project.get("address_street"): addr_parts.append(project["address_street"])
    city_line = " ".join(filter(None,[
        project.get("address_city",""), project.get("address_state",""),
        project.get("address_zip","")]))
    if city_line: addr_parts.append(city_line)

    client_rows = [[
        _P("CLIENT", fs=7, font="Helvetica-Bold", color=GRAY),
        _P(f"<b>{project.get('name','')}</b>", fs=11, font="Helvetica-Bold"),
    ]]
    for line in addr_parts:
        client_rows.append([_P(""), _P(line, fs=9, color=GRAY)])
    if project.get("phone"):
        client_rows.append([_P("PHONE", fs=7, font="Helvetica-Bold", color=GRAY),
                            _P(project["phone"], fs=9)])
    if project.get("notes"):
        client_rows.append([_P("NOTES", fs=7, font="Helvetica-Bold", color=GRAY),
                            _P(project["notes"], fs=8, color=DARK,
                               font="Helvetica-Oblique")])

    ctbl = Table(client_rows, colWidths=[1.0*inch, 6.3*inch])
    ctbl.setStyle(TableStyle([
        ("VALIGN",(0,0),(-1,-1),"TOP"),
        ("TOPPADDING",(0,0),(-1,-1),4),
        ("BOTTOMPADDING",(0,0),(-1,-1),4),
        ("LEFTPADDING",(0,0),(-1,-1),0),
    ]))
    els.append(ctbl)
    els.append(Spacer(1, 18))

    # ── Production line items — full specs, NO price ──────────────────────────
    def H(t, align=TA_LEFT):
        return _P(f"<b>{t}</b>", fs=7, font="Helvetica-Bold", color=WHITE, align=align)

    rows = [[H("#"), H("ROOM"), H("TREATMENT & FABRIC"),
             H("DIMENSIONS"), H("OPERATION"), H("OPTIONS")]]

    for i, s in enumerate(project.get("shades", []), 1):
        options = []
        if s.get("reverse_roll"):         options.append("Reverse Roll")
        if s.get("cassette_with_fabric"): options.append("Cassette w/ Fabric")
        if s.get("remove_old"):           options.append("Remove Existing")
        if s.get("haul_away"):            options.append("Haul Away")

        bk = s.get("breakdown", {})
        dims = (f"{float(s['width']):.1f}\" × {float(s['height']):.1f}\"\n"
                f"({bk.get('width_m','')}m × {bk.get('height_m','')}m)\n"
                f"Area: {bk.get('area_m2','')}m²")

        rows.append([
            _P(str(i), fs=8, color=GRAY),
            _P(f"<b>{s.get('label','Room')}</b>", fs=9, font="Helvetica-Bold"),
            [_P(f"<b>{s.get('treatment','')} Shade</b>", fs=9,
                font="Helvetica-Bold", color=DARK),
             _P(f"Fabric: {s.get('fabric_code','TBD')}", fs=8, color=GRAY, spaceBefore=2)],
            _P(dims, fs=8, color=DARK, leading=12),
            _P(s.get("operation","manual").title(), fs=8, color=DARK),
            _P("\n".join(options) if options else "Standard", fs=8, color=GRAY, leading=12),
        ])
        # Notes row if present
        if s.get("notes"):
            rows.append([
                _P(""),
                _P(f"↳ Note: {s['notes']}", fs=8, color=GRAY,
                   font="Helvetica-Oblique", spanColumns=5),
                "","","","",
            ])

    tbl = Table(rows, colWidths=[0.3*inch,1.1*inch,1.8*inch,1.65*inch,0.9*inch,1.55*inch])
    tbl.setStyle(TableStyle([
        ("BACKGROUND",(0,0),(-1,0),NAVY),
        ("TOPPADDING",(0,0),(-1,0),9),("BOTTOMPADDING",(0,0),(-1,0),9),
        ("LEFTPADDING",(0,0),(-1,0),8),("RIGHTPADDING",(0,0),(-1,0),8),
        ("TOPPADDING",(0,1),(-1,-1),10),("BOTTOMPADDING",(0,1),(-1,-1),10),
        ("LEFTPADDING",(0,1),(-1,-1),8),("RIGHTPADDING",(0,1),(-1,-1),8),
        ("VALIGN",(0,0),(-1,-1),"TOP"),
        ("ROWBACKGROUNDS",(0,1),(-1,-1),[WHITE, LIGHT]),
        ("LINEBELOW",(0,0),(-1,-1),0.5,LINE),
    ]))
    els.append(tbl)

    # ── Summary counts ────────────────────────────────────────────────────────
    shades = project.get("shades", [])
    motorized = sum(1 for s in shades if s.get("operation") == "motorized")
    cordless  = sum(1 for s in shades if s.get("operation") == "cordless")
    manual    = sum(1 for s in shades if s.get("operation") == "manual")
    remove    = sum(1 for s in shades if s.get("remove_old"))
    haul      = sum(1 for s in shades if s.get("haul_away"))

    els.append(Spacer(1, 20))
    els.append(HRFlowable(width="100%",thickness=0.5,color=LINE,spaceAfter=10))
    els.append(_P("INSTALLATION SUMMARY", fs=8, font="Helvetica-Bold", color=NAVY,
                  spaceAfter=8))

    summary_data = [[
        _P(f"<b>{len(shades)}</b><br/>Total Shades", fs=10,
           font="Helvetica-Bold", align=TA_CENTER),
        _P(f"<b>{motorized}</b><br/>Motorized", fs=10,
           font="Helvetica-Bold", align=TA_CENTER, color=NAVY),
        _P(f"<b>{cordless}</b><br/>Cordless", fs=10,
           font="Helvetica-Bold", align=TA_CENTER),
        _P(f"<b>{manual}</b><br/>Manual", fs=10,
           font="Helvetica-Bold", align=TA_CENTER),
        _P(f"<b>{remove}</b><br/>Remove Old", fs=10,
           font="Helvetica-Bold", align=TA_CENTER, color=RED if remove else GRAY),
        _P(f"<b>{haul}</b><br/>Haul Away", fs=10,
           font="Helvetica-Bold", align=TA_CENTER, color=RED if haul else GRAY),
    ]]
    sumtbl = Table(summary_data, colWidths=[1.2*inch]*6)
    sumtbl.setStyle(TableStyle([
        ("ALIGN",(0,0),(-1,-1),"CENTER"),
        ("VALIGN",(0,0),(-1,-1),"MIDDLE"),
        ("TOPPADDING",(0,0),(-1,-1),10),
        ("BOTTOMPADDING",(0,0),(-1,-1),10),
        ("BACKGROUND",(0,0),(-1,-1),LIGHT),
        ("LINEAFTER",(0,0),(-2,-1),0.5,LINE),
        ("BOX",(0,0),(-1,-1),1,LINE),
    ]))
    els.append(sumtbl)

    els.append(Spacer(1,30))
    els.append(HRFlowable(width="100%",thickness=0.5,color=LINE,spaceAfter=8))
    els.append(_P(
        f"Production Sheet — Est. #{project.get('estimate_number','—')} — "
        f"IL Progetto LLC • CONFIDENTIAL — NOT FOR CLIENT DISTRIBUTION",
        fs=7, color=GRAY, align=TA_CENTER))

    doc.build(els)
    buf.seek(0)
    return buf.read()
