@echo off
cd /d C:\Users\bakho\Downloads\ilprogetto-spa-v2\ilprogetto-spa

echo.
set /p msg="Commit message (Enter = Update site): "
if "%msg%"=="" set msg=Update site

git add -A
git commit -m "%msg%"
git push

echo.
echo Pushed! Vercel is deploying (usually 1-2 min)...
echo.

set i=0
:loop
set /a i+=1
set /a pct=i*100/90

if %i% leq 90 (
    <nul set /p "=#"
    timeout /t 1 /nobreak >nul
    if %i%==30 echo  30%%
    if %i%==60 echo  60%%
    if %i%==90 echo  100%% - Done!
    if %i% lss 90 goto loop
)

echo.
echo Site is live: https://ilprogetto-spa.vercel.app
start https://ilprogetto-spa.vercel.app
echo.
pause
