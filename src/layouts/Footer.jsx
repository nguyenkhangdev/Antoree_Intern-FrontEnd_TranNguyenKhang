import logoGoogle from "../assets/logo_android.png";
import logoIOS from "../assets/logo_ios.png";

export default function Footer() {
  return (
    <footer className="bg-zinc-900 text-white text-sm p-3 py-10 max-w-screen">
      <div className=" max-w-[1100px] mx-auto">
        <div className="container mx-auto px-4 pb-8 grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h4 className="font-bold uppercase mb-4">Hỗ trợ khách hàng</h4>
            <p>Hotline 0877709376</p>
            <p>Email: cskh@antoree.com</p>
            <p>Phản hồi về dịch vụ:</p>
            <p>anh.pham2@antoree.com</p>
          </div>

          <div>
            <h4 className="font-bold uppercase mb-4">Thông tin dịch vụ</h4>
            <ul className="space-y-2">
              <li>Điều khoản sử dụng</li>
              <li>Chính sách bảo mật</li>
              <li>Chính sách hoàn tiền</li>
              <li>FAQs</li>
              <li>Cam kết đầu ra</li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold uppercase mb-4">Kết nối với Antoree</h4>
            <p className="mb-2">Cộng đồng</p>
            <button className="bg-green-500 text-white px-4 py-2 rounded-md font-medium hover:bg-green-600 mb-4">
              Trở thành giáo viên
            </button>
            <div className="flex space-x-3 text-white text-xl">
              <i className="fab fa-facebook-f"></i>
              <i className="fab fa-zalo"></i>
              <i className="fab fa-youtube"></i>
              <i className="fab fa-skype"></i>
            </div>
          </div>

          <div>
            <h4 className="font-bold uppercase mb-4">
              Tải ứng dụng trên điện thoại
            </h4>
            <div className="space-y-2">
              <img src={logoGoogle} alt="Google Play" className="w-36" />
              <img src={logoIOS} alt="App Store" className="w-36" />
            </div>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-10 pt-6 px-4 container mx-auto space-y-4 text-sm">
          <p>
            <strong>
              Công ty Giáo dục và Đào tạo ANTOREE INTERNATIONAL PTE. LTD. (MST:
              201436698Z)
            </strong>
            <br />
            Trụ sở chính: 10 Anson Road, #27-15, International Plaza, Singapore
            079903
          </p>

          <p>
            <strong>
              Đối tác đại diện tại Việt Nam: CÔNG TY TNHH PHÁT TRIỂN GIÁO DỤC
              ANTOREE (MST: 0313769851)
            </strong>
            <br />
            Trụ sở chính: 187/7 Điện Biên Phủ, P. Đa Kao, Q.1, TP Hồ Chí Minh,
            Việt Nam
            <br />
            Văn phòng đại diện: Số 55A Trần Thái Tông, Phường 15, Quận Tân Bình,
            TP Hồ Chí Minh, Việt Nam
          </p>

          <div className="flex justify-between items-center pt-4 border-t border-gray-700">
            <p>© 2025 Antoree Pte.Ltd</p>
            <div className="flex space-x-6">
              <a href="#">Chính sách bảo mật</a>
              <a href="#">Điều khoản sử dụng</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
