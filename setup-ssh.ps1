# SSH Setup Script for GitHub
# Run this script after adding your SSH key to GitHub

Write-Host "Setting up SSH for GitHub..." -ForegroundColor Green

# Create .ssh directory if it doesn't exist
$sshDir = "$env:USERPROFILE\.ssh"
if (-not (Test-Path $sshDir)) {
    New-Item -ItemType Directory -Path $sshDir | Out-Null
    Write-Host "Created .ssh directory" -ForegroundColor Yellow
}

# Copy SSH keys to .ssh directory
if (Test-Path "myPortfolio") {
    Copy-Item "myPortfolio" "$sshDir\id_ed25519" -Force
    Write-Host "Copied private key to ~/.ssh/id_ed25519" -ForegroundColor Yellow
}

if (Test-Path "myPortfolio.pub") {
    Copy-Item "myPortfolio.pub" "$sshDir\id_ed25519.pub" -Force
    Write-Host "Copied public key to ~/.ssh/id_ed25519.pub" -ForegroundColor Yellow
}

# Set proper permissions on private key (Windows)
$privateKey = "$sshDir\id_ed25519"
if (Test-Path $privateKey) {
    icacls $privateKey /inheritance:r /grant:r "${env:USERNAME}:F" | Out-Null
    Write-Host "Set permissions on private key" -ForegroundColor Yellow
}

# Start SSH agent and add key
Write-Host "`nStarting SSH agent..." -ForegroundColor Green
Start-Service ssh-agent -ErrorAction SilentlyContinue
ssh-add "$sshDir\id_ed25519" 2>&1 | Out-Null

# Test GitHub connection
Write-Host "`nTesting GitHub SSH connection..." -ForegroundColor Green
ssh -T git@github.com

# Change remote to SSH
Write-Host "`nChanging remote URL to SSH..." -ForegroundColor Green
git remote set-url origin git@github.com:HasnaRahma/MyPortfolio.git
Write-Host "Remote URL updated!" -ForegroundColor Green

Write-Host "`nSetup complete! You can now use 'git push' to push your changes." -ForegroundColor Green


