@echo off
cd /d C:\Users\bakho\Downloads\ilprogetto-spa-v2\ilprogetto-spa
git add -A
set /p msg="Commit message (or press Enter for 'Update site'): "
if "%msg%"=="" set msg=Update site
git commit -m "%msg%"
git push
echo.
echo Done! Press any key to close.
pause >nul
