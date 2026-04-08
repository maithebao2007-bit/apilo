const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware để đọc dữ liệu JSON
app.use(express.json());

// Endpoint mặc định (Trang chủ)
app.get('/', (req, res) => {
    res.json({
        message: "Chào mừng LeeOckin đến với API đầu tiên!",
        status: "Server đang chạy tốt"
    });
});

// Endpoint trả về thông tin sinh viên mẫu
app.get('/api/user', (req, res) => {
    res.json({
        name: "LeeOckin",
        university: "HUMG",
        major: "Information Technology",
        gpa: 3.11
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});