นางสาวผกาภรณ์ รามเจริญ 6310110287 section 02

-ในไฟล์ App.js จะสร้าง Screen ติดตั้ง library ของ react-native  และสร้างสองหน้าคือ  Home และ Weather  

-หน้า ZipCodeScreen และ WeatherScreen จะอ้างอิงมาแสดงยังทั้ง 2 หน้า จะใช้ FlatList ในการอ้าง และสร้าง list ของข้อมูล place และ code เก็บไว้ใน availableZipItems มีการใช้ TouchableHighlight เมื่อกดแล้วจะ navigate ไปยัง Weather และจะแสดงข้อมูล

-fetch ข้อมูลผ่าน api เก็บค่าที่ fetch ได้ไว้ใน state และ import Forecast เข้ามาพร้อมกับส่ง props ที่ได้ไป(ค่าที่ fetch มา)