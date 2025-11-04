# Mockup API Documentation
Tidak ada error handling, saya malas nambahin.

## Autentikasi dan Otorisasi

**Endpoint:** `/auth`  
**Method:** `POST`  
**Description:** Untuk login pengguna dan menghasilkan token autentikasi.

### Request Body
![Request Example](https://drive.google.com/uc?id=1_WbeOP5Okqjc5ZoGfyKKNsPeFcXidL9_)

### Response
![Response Example](https://drive.google.com/uc?id=1WjBzCcE3Z-TKpOrwoHOzMFID8uZTpfnN)

> **Catatan:** Token ini akan digunakan untuk autentikasi pada endpoint lainnya.

---

## Pengelolaan Data Pengguna

### Menambah Pengguna
**Endpoint:** `/user`  
**Method:** `POST`  
**Description:** Untuk menambahkan data pengguna baru.

#### Request Body
![Request Example](https://drive.google.com/uc?id=19pZN91YDokW8GDvzAV448DAiULpbYu1Y)

#### Response
![Response Example](https://drive.google.com/uc?id=1sUPmTZ5W4yAOD8bZTpEBP_aM7eSjmuBm)

---

### Mengubah Data Pengguna
**Endpoint:** `/user/{id}`  
**Method:** `PUT`  
**Description:** Untuk mengubah data pengguna.

#### Request Body
![Request Example](https://drive.google.com/uc?id=19pZN91YDokW8GDvzAV448DAiULpbYu1Y)

#### Response
![Response Example](https://drive.google.com/uc?id=1Z0_DdvRNhHQ6Rshe7PhppQmBPmCu9oDw)

---

### Mengambil Data Pengguna
**Endpoint:** `/user/{id}`  
**Method:** `GET`  
**Description:** Mengambil data pengguna berdasarkan ID.

#### Response
![Response Example](https://drive.google.com/uc?id=1Zv_1H9wRts8uHSkLBPrLqHl6K94Dx_Pg)

---

## Pencatatan Presensi

### Melakukan Presensi
**Endpoint:** `/attendance`  
**Method:** `POST`  
**Description:** Untuk mencatat kehadiran pengguna pada hari tersebut.

#### Request Body
![Request Example](https://drive.google.com/uc?id=1m1EiuDZHqdA5Hn045vutlEoKEsu0BWL2)

#### Response
![Response Example](https://drive.google.com/uc?id=112u9bmAq0VlnSSN5EIlsIQi5YQIqDgtp)

---

### Melihat Riwayat Presensi Pengguna
**Endpoint:** `/attendance/{user_id}`  
**Method:** `GET`  
**Description:** Mengambil riwayat presensi pengguna berdasarkan ID pengguna.

#### Response
![Response Example](https://drive.google.com/uc?id=1p8V8W-fv2CcrpjYoN1jaYkoKR5zShHVP)

---

## Analisis Kehadiran

### Melihat Rekap Kehadiran Bulanan
**Endpoint:** `/attendance/summary/{user_id}`  
**Method:** `GET`  
**Description:** Menampilkan rekap kehadiran bulanan pengguna.

#### Response
![Response Example](https://drive.google.com/uc?id=1LJfuW9V9kztDua6ezzRFa_eGxrW4Xbbv)

---

### 📈 Analisis Tingkat Kehadiran Berdasarkan Parameter Tertentu
**Endpoint:** `/attendance/analysis`  
**Method:** `POST`  
**Description:** Melakukan analisis tingkat kehadiran pengguna berdasarkan periode waktu dan kategori tertentu.

#### Request Body
![Request Example](https://drive.google.com/uc?id=1YG06mxzQrwGjW19jK6pw35rZo1TGOXw7)

#### Response
![Response Example](https://drive.google.com/uc?id=1bBWRh0EryjJuktdI7rchDu6XdZPs_NJ1)
