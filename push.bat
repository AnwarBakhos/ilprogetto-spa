@echo off
cd /d C:\dev\ilprogetto-spa

echo.
set /p msg="Commit message (press Enter for 'Update site'): "
if "%msg%"=="" set msg=Update site

git pull --rebase
git add -A
git commit -m "%msg%"
git push

echo.
echo Done! Vercel is deploying (about 90 seconds).
echo Site: https://ilprogetto-spa.vercel.app
echo.
pause
