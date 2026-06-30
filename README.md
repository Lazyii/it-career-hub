# IT Career Hub

IT Career Hub là một nền tảng tuyển dụng trực tuyến dành cho thị trường IT tại Việt Nam, giúp kết nối giữa ứng viên và nhà tuyển dụng. Dự án được xây dựng bằng Django với mô hình người dùng phân vai rõ ràng: ứng viên có thể tìm việc, lưu công việc, upload CV và nộp hồ sơ; nhà tuyển dụng có thể đăng tin tuyển dụng, quản lý công việc và theo dõi đơn ứng tuyển.

## Giới thiệu chung

- Lý do chọn đề: Thị trường tuyển dụng IT tại Việt Nam đang phát triển nhanh và cần một công cụ giúp kết nối ứng viên với doanh nghiệp một cách hiệu quả, trực quan và thuận tiện.
- Ý nghĩa khoa học và thực tiễn: Dự án góp phần ứng dụng công nghệ web hiện đại vào lĩnh vực tuyển dụng, tối ưu quy trình tìm việc và quản lý hồ sơ ứng tuyển.
- Mục tiêu nghiên cứu: Xây dựng một nền tảng web hỗ trợ người dùng tìm việc, đăng tuyển, quản lý hồ sơ và ứng tuyển trực tuyến một cách thuận tiện.
- Giới hạn và phạm vi nghiên cứu: Tập trung vào các chức năng cốt lõi của một nền tảng tuyển dụng IT như quản lý tin tuyển dụng, hồ sơ ứng viên, đơn ứng tuyển và phân quyền người dùng.
- Kết quả nghiên cứu dự kiến: Hoàn thiện một hệ thống web cơ bản, có thể sử dụng cho mục đích demo, nghiên cứu hoặc mở rộng trong tương lai.

## Mục tiêu dự án

- Cung cấp một hệ thống tìm việc và tuyển dụng đơn giản, trực quan cho ngành IT.
- Hỗ trợ quy trình ứng tuyển từ tìm việc, xem chi tiết tin tuyển dụng, nộp hồ sơ đến quản lý hồ sơ CV.
- Tạo nền tảng phù hợp cho việc mở rộng thêm các tính năng quản lý tuyển dụng nâng cao sau này.

## Tính năng chính

### Cho ứng viên
- Đăng ký / đăng nhập với vai trò ứng viên.
- Xem danh sách việc làm IT và tìm kiếm theo từ khóa, địa điểm, kỹ năng.
- Xem chi tiết tin tuyển dụng và ứng tuyển trực tiếp.
- Lưu công việc yêu thích và theo dõi trạng thái ứng tuyển.
- Quản lý hồ sơ cá nhân, CV và cài đặt tài khoản.

### Cho nhà tuyển dụng
- Đăng ký / đăng nhập với vai trò nhà tuyển dụng.
- Đăng tin tuyển dụng mới, chỉnh sửa và đóng tuyển.
- Quản lý công việc đã đăng.
- Theo dõi và quản lý các ứng viên ứng tuyển.
- Truy cập bảng điều khiển tuyển dụng và thống kê cơ bản.

### Hệ thống chung
- Hệ thống phân quyền theo vai trò người dùng.
- Giao diện người dùng hiện đại với template riêng cho ứng viên và nhà tuyển dụng.
- Hỗ trợ upload avatar, logo công ty và file CV (PDF).
- Quản trị viên có thể quản lý dữ liệu thông qua Django Admin.

## Công nghệ sử dụng

- Python
- Django 5.1.2
- HTML, CSS, JavaScript
- PostgreSQL
- Các thư viện hỗ trợ: Pillow, django-filter, django-crispy-forms, crispy-bootstrap5, whitenoise

## Yêu cầu kỹ thuật

### Front-end
- HTML, CSS, JavaScript
- Giao diện người dùng hiện đại và thân thiện
- Templating bằng Django Templates

### Back-end
- Django 5.1.2
- Xử lý đăng nhập, đăng ký, phân quyền, quản lý tin tuyển dụng và đơn ứng tuyển
- RESTful-style routing và class-based views

### Cơ sở dữ liệu
- PostgreSQL
- Quản lý dữ liệu người dùng, công ty, công việc, đơn ứng tuyển và file upload

## Thiết kế và triển khai

- Thiết kế hệ thống theo mô hình ứng dụng web Django với các app riêng biệt cho người dùng, công việc, công ty và ứng tuyển.
- Tách biệt cấu trúc giao diện, logic nghiệp vụ và dữ liệu để dễ bảo trì và mở rộng.
- Hỗ trợ upload ảnh/avatar, logo công ty và file CV PDF.

## Kiểm thử và hoàn thiện

- Kiểm tra các luồng chính: đăng ký, đăng nhập, đăng tin tuyển dụng, ứng tuyển, quản lý hồ sơ.
- Hoàn thiện giao diện và logic nghiệp vụ cho phiên bản demo và phát triển tiếp.
- Cần bổ sung thêm kiểm thử tự động và tối ưu hóa bảo mật trước khi triển khai sản xuất.

## Thành viên thực hiện

- Hoàng Ngân - 23110203 (nhóm trường)
- Đào Phương Linh - 23110186
- Nguyễn Phương Nhung - 23110208
- Mỵ Hiểu Minh - 23110198
- Phạm Quốc Thắng - 23110221

## Cấu trúc thư mục chính

- apps/users: quản lý người dùng, đăng nhập, đăng ký, hồ sơ cá nhân.
- apps/jobs: quản lý tin tuyển dụng, lọc tìm kiếm, ứng tuyển.
- apps/companies: quản lý công ty và dữ liệu nhà tuyển dụng.
- apps/applications: quản lý đơn ứng tuyển, bookmark và CV ứng tuyển.
- apps/core: các trang landing và dashboard chính.
- templates: giao diện web bằng Django templates.
- static: file CSS, JS và hình ảnh tĩnh.
- config: cấu hình Django settings và URL tổng.

## Yêu cầu hệ thống

- Python 3.10+
- PostgreSQL
- Virtual environment (khuyến nghị)

## Hướng dẫn chạy local

### 1) Clone repository

```bash
git clone <repository-url>
cd it-career-hub
```

### 2) Tạo môi trường ảo

```bash
python -m venv .venv
source .venv/bin/activate
```

Trên Windows PowerShell:

```powershell
.\.venv\Scripts\Activate.ps1
```

### 3) Cài đặt dependency

```bash
pip install -r requirements/dev.txt
```

### 4) Cấu hình môi trường

Dự án đang dùng PostgreSQL qua biến môi trường. Bạn cần thiết lập các biến như:

```env
DB_NAME=your_db_name
DB_USER=your_db_user
DB_PASSWORD=your_db_password
DB_HOST=localhost
DB_PORT=5432
```

### 5) Chạy migration

```bash
python manage.py migrate
```

### 6) Tạo superuser (tuỳ chọn)

```bash
python manage.py createsuperuser
```

### 7) Khởi chạy server

```bash
python manage.py runserver
```

Sau đó mở trình duyệt tại:

```text
http://127.0.0.1:8000/
```

## Docker

Trong repository đã có các file Docker tương ứng như Dockerfile và docker-compose.yml, nhưng ở snapshot hiện tại chúng chưa được cấu hình đầy đủ. Nếu bạn muốn chạy bằng Docker, cần bổ sung các bước cấu hình môi trường và service PostgreSQL cho phù hợp.

## Lưu ý quan trọng

- Cấu hình production cần bổ sung SECRET_KEY, ALLOWED_HOSTS, HTTPS và cấu hình lưu trữ file media/static phù hợp.
- Dự án hiện tại đang dùng cấu hình phát triển ở config/settings/dev.py.
- Các file upload như avatar, logo công ty và CV được lưu trong thư mục media/.

## Tài nguyên nên bổ sung trước khi đăng lên GitHub

Để repository trở nên chuyên nghiệp hơn khi đăng lên GitHub, bạn nên cân nhắc thêm các tài nguyên sau:

- Ảnh chụp giao diện chính (homepage, dashboard ứng viên, dashboard nhà tuyển dụng)
- File .env.example để người khác biết các biến môi trường cần thiết
- File LICENSE
- Logo và favicon cho dự án
- ERD / sơ đồ database hoặc sơ đồ kiến trúc hệ thống
- Hướng dẫn deploy production (nginx, gunicorn, PostgreSQL trên server)
- Demo video hoặc link demo nếu có

## Ghi chú

README này được viết dựa trên trạng thái hiện tại của repository. Một số phần như Docker và production deployment vẫn cần được hoàn thiện thêm để có thể dùng thực tế trong môi trường sản xuất.
