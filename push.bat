@echo off
cd /d C:\dev\ilprogetto-spa

echo.
set /p msg="Commit message (press Enter for 'Update site'): "
if "%msg%"=="" set msg=Update site

if exist ".git\index.lock" del /f ".git\index.lock"
git add -A
git commit -m "%msg%"
git pull --rebase
if %errorlevel% neq 0 (
  echo.
  echo ERROR: Merge conflict during pull. Do NOT push.
  echo Run: git rebase --abort
  echo Then contact support before retrying.
  pause
  exit /b 1
)
git push

echo.
echo Done! Vercel is deploying (about 90 seconds).
echo Site: https://ilprogetto-spa.vercel.app
echo.
pause
