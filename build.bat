meteor build ../builds --server=garavaldi.crosssitefeeding.ch
#zipalign -f 4 ..\builds\android\release-unsigned.apk ..\builds\android\release-unsigned-aligned.apk
#apksigner sign --out ..\builds\android\eGalerie_vXXX.apk -ks ..\keys\.keystore ..\builds\android\release-unsigned-aligned.apk