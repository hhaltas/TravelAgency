# Expo Router Example

Use [`expo-router`](https://expo.github.io/router) to build native navigation using files in the `app/` directory.

## 🚀 How to use

```sh
npx create-expo-app -e with-router
```

## 📝 Notes

- [Expo Router: Docs](https://expo.github.io/router)
- [Expo Router: Repo](https://github.com/expo/router)

## Kurulumlar

1. Node js version 18.17.1 versionun kurulumunu yapılacak.

   link -> https://nodejs.org/en

   veya terminalden

   winget install OpenJS.NodeJS

   # or for LTS

   winget install OpenJS.NodeJS.LTS

\*Kurulum sonrası terminalden

    $ node -v

    	ile  node versiyonun kurulumunu gösterecek.


2.  Paket yükleyici olarak "npm" veya "yarn" kurulumu yapılacak

    node.js kurulumu ile "npm" pakey kurulumu gerçekleşir. Kendimin kullandığı "yarn" paketi kurulumu terminalden gerçekleştiriyoruz.

    $ npm install --global yarn

        Kurulum testı için terminalden

        $ yarn --version

3.      Sonrasında Expo nun kurulumunu yapıyoruz.

    link -> https://docs.expo.dev/get-started/installation/

    $ yarn global add expo-cli

    $ yarn add expo

    sonrasında yüklenme tesitini yapıyoruz.

    $ expo --version

4.  Proje dosyamızın Git repomuzdan indiriyoruz ve terminalden üzerinden

    link -> https://github.com/hhaltas/TravelAgency

    $ git clone https://github.com/hhaltas/TravelAgency

5.  Kurulum sonrası terminal üzerinden proje dosyamızı indirdiğimiz
    "travelagency" projeyi terminalden paketleri yükleyeceğiz.

    $ ../travelagency/ yarn

    veya

    $ ../travelagency/ npm install

    yazılacak ve package-lock.json daki veya yarn.lock daki paketleri yükleyeceğiz

6.  En son çalıştırma işlemi için kaldı.
    mobil cihazlar için play store veya appstore üzerinden "EXPO" uygulamsını kurulumunu sağlayacağız.

    Projeyi çalıştırmak için terminalden

    $ expo start

        projenin "expo" içinde ios ve android emulatörler için kurulumu ve çalıştırılması
        için açılan Metro Bundle açılacak ve elimizdeki cihazlardan "expo" uygulaması ile
        QR Kod taraması yapılarak veya USB KABLOSU üzerinden bundle yüklenir.

    İOS için

    Emulatörden açmak için Mac PClerde XCode indirilerek kurulması gerekir.

    link -> https://apps.apple.com/us/app/xcode/id497799835?mt=12

        kurulum sonrasında

        $ npx expo start --ios

        sadece ios cihazda çalıştırma yapabilriz.

    Android için

    Windows ve Mac cihazlarda sadece Android Studio kurulması gerekiyor

        link -> https://developer.android.com/

        kurulum sonrası  terminalden

        	$ npx expo start --android


        	sadece android olarak çalıştırabiliriz.



---

## Datalarımız için

    src/assets/static.js

        dosyamızda sabit aldığımız renkler,oturma tasarımı ,şehir ve cinsiyet listemiz bulunmaktadır.

        Tarihi new Date() olarak aldığım için cihaz tarihi olarak alıyorum ve verilerdeki

        tarihi bugünkü tarihe ayarlayınız. Tarih formatı 'DD/MM/YYYY' olarak ayarlanmıştır.
