#!/bin/bash

function install {
  curl -sL https://dl.yarnpkg.com/debian/pubkey.gpg | gpg --dearmor | sudo tee /usr/share/keyrings/yarnkey.gpg >/dev/null
  echo "deb [signed-by=/usr/share/keyrings/yarnkey.gpg] https://dl.yarnpkg.com/debian stable main" | sudo tee /etc/apt/sources.list.d/yarn.list
  curl -sL https://deb.nodesource.com/setup_17.x -o nodesource_setup.sh
  chmod +x nodesource_setup.sh
  sudo ./nodesource_setup.sh

  sudo apt-get install -y nodejs yarn
}

if [ -z $(which node) ]; then
  echo "node is not installed"
  install node
fi

sudo apt upgrade -y

echo "node $(node -v) is installed."