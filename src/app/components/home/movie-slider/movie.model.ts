//Dùng interface khi chỉ cần mô tả dữ liệu API trả về.
//Dùng class nếu cần thêm phương thức hoặc logic xử lý dữ liệu bên trong
export interface Movie {
    id: number;
    movieName: string;
    imageUrl: string;
    rating: string;
  }