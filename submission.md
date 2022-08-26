นางสาวผกาภรณ์ รามเจริญ 6310110287 section 02

-ในไฟล์ App.js จะสร้าง Screen ติดตั้ง library ของ react-native  และสร้างสองหน้าคือ  Home และ Weather  


-ZipCodeScreen และ WeatherScreen เป็นหน้าต่างที่ต้องการจะแสดงผล 

-ZipCodeScreen ใช้ FlatList ซึ่งเป็น Component ของ react-native และจะ pass จะสร้าง list ของข้อมูล place และ code , ZipItem จะใช้ TouchableHighlight เมื่อกดแล้วจะ ไปหน้า Weather และแสดงข้อมูล


-WeatherScreen  fetch ข้อมูลผ่าน api และเก็บค่าที่ fetch ได้ไว้ใน state และ import Forecast เข้ามาพร้อมกับส่ง props ที่ได้ไปค่าที่เข้ามา


Part 6 การจัดเรียงตัวอักษร หน้า Weathe
จัดเรียงหน้าใหม่ ใส่ค่าเริ่มต้นของ เพิ่มในส่วนของ Humidity และ Feel Like เข้าไป และตั้งค่าสีขนาดของตัวอักษร

Part 6 หน้า Home จะจัดเรียงชื่อและตัวอักษรใหม่ ขนาด ให้สมส่วนกับหน้าจอ และให้อยู่ระยะตรงหลาง เท่าๆกัน

Part 6 เพิ่มพื้นที่สภาพอากาศ จะเพิ่มพื้นขึ้นมาโดยอ้าง { place: 'เมืองชุมพร', code: 'รหัสไปรณี' } และจะทราบสภาพอากาศในพื้นที่นั้นๆ 

Part 6 ตกแต่งหน้า Home เพิ่มในส่วนของหัวของโทรศัพท์ และมีหัวข้อเป็นไตเติ้ล

Part 6 จะเป็นการเพิ่มในส่วนของหน้า Forecast.js<Text style={style.location}>{props.name}, {props.country} </Text> จะเป็นการเพิ่มและจะมีการอ้างไปหน้า Weather.js name: 'loading', country: 'loading', =>  name: json.name, country: json.sys.country, จะเป็นการอ้างว่าพื้นที่ ที่เรากดเข้ามามันอยู่ในส่วนไหน อยู่จังหวัดอะไร ประเทศอะไร
