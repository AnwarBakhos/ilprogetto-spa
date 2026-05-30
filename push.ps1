$projectDir = "C:\Users\bakho\Downloads\ilprogetto-spa-v2\ilprogetto-spa"
$siteUrl    = "https://ilprogetto-spa.vercel.app"
$dashUrl    = "https://vercel.com/bakhos2005-6575s-projects/ilprogetto-spa"

Set-Location $projectDir

# ── Commit message ────────────────────────────────────────────────────────────
$msg = Read-Host "Commit message (Enter = 'Update site')"
if ([string]::IsNullOrWhiteSpace($msg)) { $msg = "Update site" }

# ── Git add, commit, push ─────────────────────────────────────────────────────
Write-Host ""
Write-Host "  Staging all changes..." -ForegroundColor Cyan
git add -A

Write-Host "  Committing: $msg" -ForegroundColor Cyan
$commitOut = git commit -m $msg 2>&1
if ($LASTEXITCODE -ne 0 -and $commitOut -match "nothing to commit") {
    Write-Host "  Nothing new to commit — pushing existing HEAD." -ForegroundColor Yellow
} elseif ($LASTEXITCODE -ne 0) {
    Write-Host "  Commit failed: $commitOut" -ForegroundColor Red
    Read-Host "Press Enter to exit"
    exit 1
}

Write-Host "  Pushing to GitHub..." -ForegroundColor Cyan
git push
if ($LASTEXITCODE -ne 0) {
    Write-Host "  Push failed!" -ForegroundColor Red
    Read-Host "Press Enter to exit"
    exit 1
}

Write-Host ""
Write-Host "  Pushed! Vercel is building..." -ForegroundColor Green

# ── Poll Vercel until content changes (max 3 min) ────────────────────────────
$deploySeconds = 120      # typical Vercel build time
$pollInterval  = 3        # seconds between checks
$elapsed       = 0
$started       = Get-Date

# Grab a baseline ETag/content-length to detect when new version is live
try {
    $baseline = (Invoke-WebRequest -Uri $siteUrl -Method Head -UseBasicParsing -TimeoutSec 5).Headers
    $baseEtag = $baseline["ETag"]
    $baseLen  = $baseline["Content-Length"]
} catch {
    $baseEtag = ""
    $baseLen  = ""
}

$deployed = $false

while ($elapsed -lt ($deploySeconds + 60)) {
    Start-Sleep -Seconds $pollInterval
    $elapsed = [int]((Get-Date) - $started).TotalSeconds

    $pct     = [Math]::Min(99, [int]($elapsed / $deploySeconds * 100))
    $status  = if ($elapsed -lt 20) { "Initializing build..." }
               elseif ($elapsed -lt 50) { "Compiling TypeScript..." }
               elseif ($elapsed -lt 80) { "Bundling assets..." }
               elseif ($elapsed -lt 100) { "Deploying to edge..." }
               else { "Finalizing..." }

    Write-Progress -Activity "Vercel Deployment" `
                   -Status "$status  ($elapsed s elapsed)" `
                   -PercentComplete $pct

    # Check if new version is live by comparing ETag or content-length
    try {
        $headers = (Invoke-WebRequest -Uri $siteUrl -Method Head -UseBasicParsing -TimeoutSec 5).Headers
        $newEtag = $headers["ETag"]
        $newLen  = $headers["Content-Length"]

        if (($newEtag -and $newEtag -ne $baseEtag) -or ($newLen -and $newLen -ne $baseLen)) {
            $deployed = $true
            break
        }
    } catch { <# ignore network blips #> }

    # After 2 min just assume it's done
    if ($elapsed -ge $deploySeconds) {
        $deployed = $true
        break
    }
}

Write-Progress -Activity "Vercel Deployment" -Completed
Write-Host ""

if ($deployed) {
    Write-Host "  ✓ Deployed successfully!" -ForegroundColor Green
} else {
    Write-Host "  ⚠  Timed out — check Vercel dashboard." -ForegroundColor Yellow
}

Write-Host ""
Write-Host "  Site:      $siteUrl" -ForegroundColor White
Write-Host "  Dashboard: $dashUrl" -ForegroundColor DarkGray
Write-Host ""

# Open site in browser
Start-Process $siteUrl
Read-Host "Press Enter to close"
