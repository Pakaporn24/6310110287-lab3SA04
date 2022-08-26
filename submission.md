นางสาวผกาภรณ์ รามเจริญ 6310110287 section 02

-ในไฟล์ App.js จะสร้าง Screen ติดตั้ง library ของ react-native  และสร้างสองหน้าคือ  Home และ Weather  


-ZipCodeScreen และ WeatherScreen เป็นหน้าต่างที่ต้องการจะแสดงผล 

-ZipCodeScreen ใช้ FlatList ซึ่งเป็น Component ของ react-native และจะ pass จะสร้าง list ของข้อมูล place และ code , ZipItem จะใช้ TouchableHighlight เมื่อกดแล้วจะ ไปหน้า Weather และแสดงข้อมูล


-WeatherScreen  fetch ข้อมูลผ่าน api และเก็บค่าที่ fetch ได้ไว้ใน state และ import Forecast เข้ามาพร้อมกับส่ง props ที่ได้ไปค่าที่เข้ามา

