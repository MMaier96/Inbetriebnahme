#!/bin/bash
# Deploy Script

clear
echo "###############################################"
echo "# Deploy the Angular Project to Github Pages! #"
echo "###############################################"
echo ""
echo "$ Start compiling as production ..."
ng build --prod --base-href="https://mmaier96.github.io/Inbetriebnahme/"
echo "$ Moving files to dist folder ... "
robocopy //move //e "C://Users//marcel.maier//Desktop//T3000//Source-Code//WamasWEB//dist//Inbetriebnahme" "C://Users//marcel.maier//Desktop//T3000//Source-Code//WamasWEB//dist"
echo "$ Publishing to Github ... "
angular-cli-ghpages
echo ""
echo "###############################################"
echo "#                   Finished                  #"
echo "###############################################"
echo ""
echo "Press any key to exit ... "
read -rsn1