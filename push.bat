@echo off
cd /d C:\Users\bakho\Downloads\ilprogetto-spa-v2\ilprogetto-spa

echo.
set /p msg="Commit message (press Enter for 'Update site'): "
if "%msg%"=="" set msg=Update site

git add -A
git commit -m "%msg%"
git push

echo.
echo Done! Vercel is deploying (about 90 seconds).
echo Site: https://ilprogetto-spa.vercel.app
echo.
pause
