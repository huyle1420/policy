import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

type Props = {};

const SupplierPolicyPage = (props: Props) => {
  return (
    <div className="grid grid-cols-4 gap-4 p-4">
      <div className="col col-span-1 sticky top-0 self-start">
        <Accordion
          type="single"
          collapsible
          className="w-full"
          defaultValue="item-1"
        >
          <AccordionItem value="item-1">
            <AccordionTrigger className="pr-0 [&>svg]:hidden">
              <a href="#common-rule" className="w-full inline-block">
                Nguyên tắc
              </a>
            </AccordionTrigger>
          </AccordionItem>

          <AccordionItem value="item-3">
            <AccordionTrigger className="pr-0 [&>svg]:hidden">
              <a href="#common-regulation" className="w-full inline-block">
                Quy định chung
              </a>
            </AccordionTrigger>
          </AccordionItem>

          <AccordionItem value="item-2">
            <AccordionTrigger>Quy trình giao dịch</AccordionTrigger>
            <AccordionContent className="flex flex-col gap-4 text-balance">
              <a href="#service-user">
                Quy trình dành cho Người sử dụng dịch vụ
              </a>
              <a href="#service-supplier">
                Quy trình dành cho Người cung cấp dịch vụ
              </a>
              <a href="#delivery-method">Phương thức vận chuyển giao nhận</a>
              <a href="#delivery-refund">Chính sách đổi trả/hủy và hoàn tiền</a>
              <a href="#delivery-handle">Chính sách kiểm hàng</a>
              <a href="#delivery-warranty">Chính sách bảo hành</a>
              <a href="#delivery-complaint">
                Quy trình giải quyết tranh chấp, khiếu nại
              </a>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-4">
            <AccordionTrigger className="pr-0 [&>svg]:hidden">
              <a href="#payment-procedure" className="w-full inline-block">
                Quy trình thanh toán
              </a>
            </AccordionTrigger>
          </AccordionItem>

          <AccordionItem value="item-5">
            <AccordionTrigger className="pr-0 [&>svg]:hidden">
              <a href="#secure-transactions" className="w-full inline-block">
                Đảm bảo an toàn giao dịch
              </a>
            </AccordionTrigger>
          </AccordionItem>

          <AccordionItem value="item-6">
            <AccordionTrigger className="pr-0 [&>svg]:hidden">
              <a
                href="#technical-responsibility"
                className="w-full inline-block"
              >
                Trách nhiệm trong trường hợp phát sinh sự cố kỹ thuật
              </a>
            </AccordionTrigger>
          </AccordionItem>

          <AccordionItem value="item-7">
            <AccordionTrigger className="pr-0 [&>svg]:hidden">
              <a href="#personal-infor-policy" className="w-full inline-block">
                Chính sách Bảo vệ thông tin cá nhân của người tiêu dùng
              </a>
            </AccordionTrigger>
          </AccordionItem>

          <AccordionItem value="item-8">
            <AccordionTrigger className="pr-0 [&>svg]:hidden">
              <a href="#app-management" className="w-full inline-block">
                Quản lý thông tin trên Ứng dụng
              </a>
            </AccordionTrigger>
          </AccordionItem>

          <AccordionItem value="item-9">
            <AccordionTrigger>
              <a
                href="#permission-responsibility-app"
                className="w-full inline-block"
              >
                Quyền và trách nhiệm của Ban quản lý Ứng dụng TripC
              </a>
            </AccordionTrigger>
            <AccordionContent className="flex flex-col gap-4 text-balance">
              <a href="#permission-app">Quyền của Ban quản lý Ứng dụng TripC</a>
              <a href="#responsibility-app">
                Nghĩa vụ và trách nhiệm của Ban quản lý Ứng dụng TripC
              </a>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-10">
            <AccordionTrigger>
              <a
                href="#permission-responsibility-app-supplier"
                className="w-full inline-block"
              >
                Quyền và trách nhiệm của Người cung cấp dịch vụ trên Ứng dụng
                TripC
              </a>
            </AccordionTrigger>
            <AccordionContent className="flex flex-col gap-4 text-balance">
              <a href="#permission-app-supplier">
                Quyền của Người cung cấp dịch vụ trên Ứng dụng TripC
              </a>
              <a href="#responsibility-app-supplier">
                Nghĩa vụ và trách nhiệm của Ban quản lý Ứng dụng TripC
              </a>
            </AccordionContent>
          </AccordionItem>

           <AccordionItem value="item-13">
            <AccordionTrigger>
              <a
                href="#permission-responsibility-app-user"
                className="w-full inline-block"
              >
                Quyền và trách nhiệm của Người sử dụng dịch vụ trên Ứng dụng
                TripC
              </a>
            </AccordionTrigger>
            <AccordionContent className="flex flex-col gap-4 text-balance">
              <a href="#permission-app-user">
                Quyền của Người sử dụng dịch vụ trên Ứng dụng cung cấp dịch vụ TMĐT TripC
              </a>
              <a href="#responsibility-app-user">
                Nghĩa vụ và trách nhiệm Người sử dụng dịch vụ trên Ứng dụng cung cấp dịch vụ TMĐT TripC
              </a>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-11">
            <AccordionTrigger className="pr-0 [&>svg]:hidden">
              <a href="#corrective-measure" className="w-full inline-block">
                Biện pháp xử lý vi phạm dịch vụ TMĐT TripC
              </a>
            </AccordionTrigger>
          </AccordionItem>

          <AccordionItem value="item-12">
            <AccordionTrigger className="pr-0 [&>svg]:hidden">
              <a href="#applicable-terms" className="w-full inline-block">
                Điều khoản áp dụng
              </a>
            </AccordionTrigger>
          </AccordionItem>
        </Accordion>
      </div>

      <div className="col col-span-3 p-10">
        <div>
          <p className="text-lg font-semibold">
            QUY CHẾ HOẠT ĐỘNG ỨNG DỤNG CUNG CẤP DỊCH VỤ TMĐT TRIPC
          </p>
        </div>

        <ul className="mt-10">
          <li className="font-medium" id="common-rule">
            I. Nguyên tắc chung
          </li>
          <li>
            CÔNG TY CỔ PHẦN ALLY AI với Mã số doanh nghiệp số: 0402251123, đăng
            ký lần đầu ngày 09/10/2024 do Phòng Đăng ký kinh doanh - Sở Kế hoạch
            và Đầu tư thành phố Đà Nẵng cấp. Công ty đã vận hành Ứng dụng TripC
            từ tháng 05 năm 2025
          </li>

          <li>Địa chỉ đăng nhập dành cho người sử dụng dịch vụ: TripC</li>

          <li className="font-medium">Nguyên tắc:</li>

          <li>
            Ứng dụng cung cấp dịch vụ thương mại điện tử TripC do CÔNG TY CỔ
            PHẦN ALLY AI vận hành và phát triển. Đây là môi trường cung cấp dịch
            vụ sàn giao dịch thương mại điện tử kết nối giữa Người cung cấp dịch
            vụ du lịch bao gồm: vui chơi giải trí, lưu trú, tour du lịch, nhà
            hàng, làm đẹp, chăm sóc sức khỏe, di chuyển và Người sử dụng dịch vụ
            cónhu cầu sử dụng các dịch vụ này.
          </li>

          <li>
            Dịch vụ được đăng tải trên TripC phải đáp ứng đầy đủ các quy định
            của pháp luật có liên quan, không thuộc các trường hợp cấm kinh
            doanh, cấm quảng cáo theo quy định của pháp luật. Các thương nhân,
            tổ chức, cá nhân tham gia hoạt động cung cấp dịch vụ phải tuân thủ
            các quy định của Luật bảo vệ quyền lợi người tiêu dùng và tự chịu
            trách nhiệm mọi vấn đề liên quan đến sản phẩm mà bên mình cung cấp.
          </li>

          <li>
            Hoạt động cung cấp dịch vụ qua TripC phải được thực hiện công khai,
            minh bạch, đảm bảo quyền lợi của người tiêu dùng.
          </li>

          <li>
            Tất cả các nội dung trong bản Quy chế này tuân thủ theo hệ thống
            pháp luật hiện hành của Việt Nam. Thành viên khi tham gia vào TripC
            phải tự tìm hiểu trách nhiệm pháp lý của mình theo luật pháp hiện
            hành của Việt Nam và cam kết thực hiện đúng những nội dung trong Quy
            chế của Ứng dụng TripC.
          </li>
        </ul>

        <ul className="mt-4">
          <li className="font-medium" id="common-regulation">
            II. Quy định chung
          </li>
          <li>
            Sàn Giao dịch Thương mại Điện tử: Sàn giao dịch TMĐT TripC do CÔNG
            TY CỔ PHẦN ALLY AI phát triển với tên ứng dụng là TripC (sau đây gọi
            tắt là: “Sàn giao dịch TMĐT TripC”).
          </li>

          <li className="font-medium">Định nghĩa chung:</li>

          <li>
            Người cung cấp dịch vụ: là thương nhân, tổ chức, cá nhân có nhu cầu
            sử dụng dịch vụ của TripC bao gồm: được hỗ trợ đăng tin giới thiệu
            dịch vụ, hỗ trợ booking lịch đặt phòng. Người cung cấp dịch vụ buộc
            phải ký hợp đồng dịch vụ thương mại điện tử với CÔNG TY CỔ PHẦN ALLY
            AI.
          </li>

          <li>
            Thành viên: là bao gồm cả Người cung cấp dịch vụ và Người sử dụng
            dịch vụ lưu trú đăng ký sử dụng dịch vụ tại trang web TripC. Người
            sử dụng dịch vụ: là các cá nhân, tổ chức có nhu cầu tìm hiểu thông
            tin về đặt phòng trên TripC.
          </li>

          <li>
            Hàng hóa: Được hiểu là “Thông tin dịch vụ” được đăng tin tại các mục
            trên Ứng dụng TripC. Nội dung bản Quy chế này tuân thủ theo các quy
            định hiện hành của Việt Nam. Thành viên khi tham gia vào Sàn giao
            dịch TMĐT TripC phải tự tìm hiểu trách nhiệm pháp lý của mình đối
            với luật pháp hiện hành của Việt Nam và cam kết thực hiện đúng những
            nội dung trong Quy chế của Sàn giao dịch TMDT TripC.
          </li>

          <li>
            Nội dung bản Quy chế này tuân thủ theo các quy định hiện hành của
            pháp luật Việt Nam. Thành viên khi tham gia vào Ứng dụng cung cấp
            dịch vụ TMĐT TripC phải tự tìm hiểu trách nhiệm pháp lý của mình đối
            với luật pháp hiện hành của Việt Nam và cam kết thực hiện đúng những
            nội dung trong Quy chế của Ứng dụng cung cấp dịch vụ TMĐT TripC.
          </li>
        </ul>

        <ul className="mt-4">
          <li className="font-medium">III. Quy trình giao dịch</li>
          <li className="font-medium" id="service-user">
            1. Quy trình dành cho Người sử dụng dịch vụ:
          </li>
          <li>
            Để đặt dịch vụ, người sử dụng dịch vụ có thể không cần đăng ký tài
            khoản hoặc tiến hành đăng ký tài khoản để nhận các ưu đãi thành viên
            của ứng dụng TripC, theo dõi đặt dịch vụ, đánh giá và có những trải
            nghiệm dịch vụ tốt hơn trên ứng dụng.
          </li>

          <ul>
            <li className="font-medium">Hướng dẫn đăng ký tài khoản</li>
            <li>Bước 1: Tải ứng dụng TripC</li>
            <li>
              Bước 2: Nhấn chọn “Tài khoản” &gt;&gt; “Đăng ký/Đăng nhập”
              &gt;&gt; Đăng ký để tạo tài khoản mới
            </li>
            <li>
              Bước 3: Điền các thông tin theo biểu mẫu có sẵn để đăng ký tài
              khoản &gt;&gt; “Đăng ký
            </li>
            <li>
              Bước 4: Điền các thông tin theo biểu mẫu có sẵn để đăng ký tài
              khoản
            </li>
            <div className="flex justify-center">
              <img
                src="https://d3strovqzyyr8u.cloudfront.net/images/13703af4-53c2-451c-b245-41680fd1cec8/register.png"
                alt=""
                className="object-contain h-60 my-2"
              />
            </div>
          </ul>

          <ul>
            <li className="font-medium">
              ❖ Hướng dẫn đặt dịch vụ (ẩm thực/giải trí/làm đẹp/lưu trú/tour/vui
              chơi/di chuyển):
            </li>

            <li>
              Khi muốn tìm dịch vụ trên ứng dụng cung cấp dịch vụ thương mại
              điện tử TripC, Người sử dụng dịch vụ sẽ trực tiếp vào ứng dụng
              TripC. Sau đó chọn dịch vụ cần tìm trên bảng danh mục dịch vụ trên
              giao diện trang chủ để xem các chi tiết dịch vụ cần đặt.
            </li>

            <li>
              <span className="font-medium">Bước 1</span>: Xem danh mục dịch vụ
              cung cấp trên ứng dụng TripC
              <div className="flex justify-center">
                <img
                  src="https://d3strovqzyyr8u.cloudfront.net/images/631d63d0-e3ef-4442-a7c0-61de2a5f87e1/category.png"
                  alt=""
                  className="object-contain h-60 my-2"
                />
              </div>
            </li>

            <li>
              <span className="font-medium">Bước 2</span>: Tìm kiếm dịch vụ phù
              hợp
              <div className="flex justify-center">
                <img
                  src="https://d3strovqzyyr8u.cloudfront.net/images/f5bca212-06a4-4d0e-8b51-07482ac7da27/suitable-service-1.png"
                  alt=""
                  className="object-contain h-60 my-2"
                />
              </div>
              <div className="flex justify-center">
                <img
                  src="https://d3strovqzyyr8u.cloudfront.net/images/3fbc2213-b2b5-4107-bb10-5db35b1a5afa/suitable-service-2.png"
                  alt=""
                  className="object-contain h-60 my-2"
                />
              </div>
            </li>

            <li>
              <span className="font-medium">Bước 3</span>: Nhấn chọn vào dịch vụ
              muốn xem chi tiết &gt;&gt; thao tác “Chọn” / “Đặt ngay” để tiến
              hành đặt dịch vụ
              <div className="flex justify-center">
                {" "}
                <img
                  src="https://d3strovqzyyr8u.cloudfront.net/images/aa86cb0d-bf41-4956-987a-39a58cc30ef4/detail-service.png"
                  alt=""
                  className="object-contain h-60 my-2"
                />
              </div>
              <div className="flex justify-center">
                <img
                  src="https://d3strovqzyyr8u.cloudfront.net/images/bcb68e1b-0219-4b63-8367-a2aab43c1542/detail-service-2.png"
                  alt=""
                  className="object-contain h-60 my-2"
                />
              </div>
            </li>
            <li>- Người dùng chọn khung giờ, ngày cho tour du lịch của mình</li>
            <li>
              - Điền các thông tin theo form yêu cầu để tiến hành đặt tour
            </li>

            <li className="italic">
              - Đối với dịch vụ có thanh toán:
              <div className="flex justify-center">
                <img
                  className="object-contain h-60 my-2"
                  src="https://d3strovqzyyr8u.cloudfront.net/images/c0ee8fd9-71b1-472d-89ca-e2188e751f20/payment-service.png"
                />
              </div>
            </li>

            <li className="italic">
              - Đối với dịch vụ Đặt chỗ không cần cọc:
              <div className="flex justify-center">
                <img
                  className="object-contain h-60 my-2"
                  src="https://d3strovqzyyr8u.cloudfront.net/images/963a2bf9-5923-4d2d-9dcb-8bf3dc3c4028/payment-reservation.png"
                />
              </div>
            </li>

            <li>
              <span className="italic">*Đối với dịch vụ Lưu trú:</span> Khách
              hàng điền ngày check in – check out, TripC sẽ đề xuất cho khách
              hàng các đơn vị liên kết và thông tin giá của các đơn vị liên kết.
              Khách hàng chọn biểu tượng mũi tên “-&gt;” hệ thống sẽ điều hướng
              sang website của đơn vị liên kết để Khách hàng tiến hành đặt dịch
              vụ.
              <div className="flex justify-center">
                <img
                  className="object-contain h-96 my-2 "
                  src="https://d3strovqzyyr8u.cloudfront.net/images/a00340f8-be8a-4989-b304-fdeac566dc2a/payment-accomodation.png"
                />
              </div>
            </li>

            <li>
              <span className="font-medium">Bước 4</span>:
            </li>
          </ul>

          <ul>
            <li>
              *Đối với dịch vụ cần thanh toán, chọn phương thức thanh toán phù
              hợp để đặt dịch vụ
              <div className="flex justify-center">
                <img
                  className="object-contain h-96 my-2"
                  src="https://d3strovqzyyr8u.cloudfront.net/images/a00340f8-be8a-4989-b304-fdeac566dc2a/payment-accomodation.png"
                />
              </div>
            </li>
            <li>
              Thông tin đặt tour sẽ được gửi về cho Sàn và Nhà cung cấp và xác
              nhận trên hệ thống
              <div className="flex justify-center">
                <img
                  className="object-contain h-96 my-2"
                  src="https://d3strovqzyyr8u.cloudfront.net/images/5764665e-18e4-4836-ad75-5284e882c31b/method-payment-success.png"
                />
              </div>
            </li>

            <li className="font-medium">❖Quản lý thông tin đặt tour</li>

            <ul>
              <li>
                <span className="font-medium">Bước 1:</span> Tại giao diện
                TripC, chọn “Tài khoản” &gt;&gt; chọn “Tour đã đặt”
                <div className="flex justify-center">
                  <img
                    src="https://d3strovqzyyr8u.cloudfront.net/images/b2750696-e7b2-460f-abac-d66d943f388c/infomation-tour.png"
                    alt=""
                    className="object-contain h-96 my-2"
                  />
                </div>
              </li>

              <li>
                Người sử dụng dịch vụ có thể xem trạng thái đơn đặt dịch vụ.
              </li>

              <li className="font-medium">
                ❖ Các tính năng khác: TripC ID, Hạng thành viên
              </li>

              <li>
                <span className="font-medium">TripC ID</span> là mã định danh
                gắn với mỗi người dùng khi tham gia vào hệ sinh thái TripC.
                TripC ID giúp liên kết tất cả hoạt động như: đặt dịch vụ, đánh
                giá, tích điểm, nâng hạng thành viên, lịch sử giao dịch, loyalty
                program...
              </li>

              <li>
                <span className="font-medium">Hạng thành viên:</span> Admin có
                thể thiết lập các hạng mức (ví dụ: Đồng, Bạc, Vàng, Bạch Kim,
                Kim Cương) dựa trên tổng chi tiêu của người dùng. Mỗi hạng mức
                sẽ có một mức chi tiêu cụ thể mà người dùng phải đạt được để
                thăng hạng. Mỗi hạng thành viên sẽ có các chương trình ưu đãi
                khác nhau: tặng e-voucher, mã khuyến mãi...
                <div className="flex justify-center">
                  <img
                    src="https://d3strovqzyyr8u.cloudfront.net/images/29fa6198-7b71-4a41-82bc-39b15b686b49/rank-member.png"
                    alt=""
                    className="object-contain h-60 my-2"
                  />
                </div>
              </li>
            </ul>

            <ul>
              <li className="font-medium" id="service-supplier">
                2. Quy trình dành cho Người cung cấp dịch vụ
              </li>
              <li className="font-medium">
                Quy trình đăng ký trở thành Nhà cung cấp
              </li>

              <li>
                <span className="font-medium">Bước 1: </span>Liên hệ để được tư
                vấn và trở thành Nhà cung cấp trên ứng dụng TripC qua email
                <span className="text-blue-500"> cs@tripc.ai</span> hoặc số điện
                thoại: 0935479122
                <div className="flex justify-center">
                  <img
                    src="https://d3strovqzyyr8u.cloudfront.net/images/4b364fe3-4ceb-4731-acff-4b106fdb8e89/contact-tripc.png"
                    alt=""
                    className="object-contain h-96 my-2 "
                  />
                </div>
              </li>

              <li>
                <span className="font-medium">Bước 2: </span> TripC thu thập các
                thông tin sau của Nhà cung cấp:
                <ul>
                  <li>Tên địa điểm</li>
                  <li>
                    Hồ sơ pháp lý: Nhà cung cấp gửi kèm bản scan các tài liệu
                    sau:
                  </li>

                  <li>
                    Giấy chứng nhận đăng ký doanh nghiệp/Giấy chứng nhận đăng ký
                    kinh doanh/Giấychứng nhận đầu tư đối với doanh nghiệp và nhà
                    đầu tư nước ngoài/Giấy chứng nhận đăng ký hộ kinh doanh (sau
                    đây gọi chung là “Giấy đăng ký kinh doanh”)
                  </li>

                  <li>
                    Giấy chứng nhận đăng ký mã số thuế (Trường hợp Hộ kinh
                    doanh)
                  </li>

                  <li>
                    Giấy phép kinh doanh có điều kiện (Giấy phép đủ điều kiện
                    kinh doanh lữ hành quốc tế/nội địa (nếu có)/ Giấy chứng nhận
                    an toàn thực phẩm/ Phòng cháy chữa cháy/ An ninh trật tự
                    ...)
                  </li>
                  <li>Số điện thoại liên hệ - Tên người liên hệ</li>
                </ul>
              </li>

              <li>
                <span className="font-medium">Bước 3: </span> Sau khi nhận được
                đầy đủ các giấy tờ pháp lý cần thiết từ Người cung cấp dịch vụ,
                Phòng ban chuyên môn sẽ chịu trách nhiệm kiểm tra, tiến hành quy
                trình rà soát trước khi quyết định giao kết hợp đồng cung cấp
                dịch vụ TMĐT với Người cung cấp dịch vụ. Cụ thể: để kiểm tra
                được tính chính xác về các giấy tờ hồ sơ của các đơn vị nhà cung
                cấp, phòng ban chuyên môn của Boki.vn sẽ đối chiếu dữ liệu trên
                Cổng thông tin quốc gia về đăng ký doanh nghiệp và tra cứu trên
                ứng dụng của tổng cục thuế, tên miền
                <a
                  href="https://tracuunnt.gdt.gov.vn/"
                  className="mx-1 text-blue-500"
                >
                  https://tracuunnt.gdt.gov.vn/
                </a>
                với thông tin mà đối tác cung cấp. Nếu trong trường hợp thông
                tin cung cấp không chính xác hoặc có sai lệch, TripC sẽ tiến
                hành liên hệ và xác minh lại thông tin với nhà cung cấp trước
                khi cấp phép trở thành người bán.
                <div className="flex justify-center">
                  <img
                    src="https://d3strovqzyyr8u.cloudfront.net/images/3ce69205-4c9d-45d2-8d41-605df35b4969/tax-vn.png"
                    alt=""
                    className="object-contain h-60 my-2 "
                  />
                </div>
              </li>

              <li>
                Trong trường hợp thông tin cung cấp chưa đầy đủ thì TripC sẽ yêu
                cầu bổ sung thông tin đầy đủ và kiểm tra chính xác hoàn toàn thì
                mới cấp phép trở thành Người cung cấp dịch vụ. Sau khi xét duyệt
                hết các thông tin đã đủ điều kiện, TripC sẽ tiến hành ký hợp
                đồng cung cấp dịch vụ. Đồng thời sẽ thu thập thông tin dịch vụ
                của Nhà cung cấp để thực hiện rà soát, đăng tải lên ứng dụng
                tripC.
              </li>
            </ul>

            <ul>
              <li className="font-medium" id="delivery-method">
                3. Phương thức vận chuyển giao nhận (Phương thức cung cấp dịch
                vụ):
              </li>
              <li>Có cung cấp dịch vụ vận chuyển</li>
              <li>Có đơn vị vận chuyển liên kết</li>
              <li>
                Người cung cấp dịch vụ tự vận chuyển (hoặc tự thuê đơn vị vận
                chuyển)
              </li>
              <li>
                Khác: Người sử dụng dịch vụ đến tận nơi của người cung cấp dịch
                vụ để sử dụng dịch vụ.
              </li>
            </ul>

            <ul>
              <li className="font-medium" id="delivery-refund">
                4. Chính sách đổi trả/hủy và hoàn tiền
              </li>

              <ul>
                <li className="font-medium">4.1 Chính sách đổi trả:</li>

                <li>
                  TripC là ứng dụng cung cấp dịch vụ du lịch. Vì vậy, TripC
                  không có chính sách đổi trả hàng. Trường hợp Người sử dụng
                  dịch vụ sử dụng dịch vụ có bất kỳ khiếu nại gì, TripC sẽ giải
                  quyết theo cơ chế giải quyết tranh chấp, khiếu nại của TripC.
                </li>

                <li>
                  Chính sách hủy dịch vụ: mỗi nhà cung cấp dịch vụ sẽ có chính
                  sách hủy khác nhau. TripC khuyến khích khách hàng đọc kỹ thông
                  tin tại mục mô tả dịch vụ trước khi đặt dịch vụ hoặc liên hệ
                  với người cung cấp dịch vụ để biết thêm thông tin chi tiết.
                </li>
              </ul>

              <ul>
                <li className="font-medium">4.2 Chính sách hoàn tiền:</li>

                <ul>
                  <li>
                    Người dùng đáp ứng đầy đủ các điều khoản và điều kiện tại
                    Chính sách hủy đặt phòng/tour du lịch sẽ được áp dụng hoàn
                    tiền tuỳ theo từng hình thức thanh toán người dùng sử dụng,
                    cụ thể như sau:
                  </li>

                  <li>
                    1. Thẻ ATM (nội địa): Hoàn tiền trong 7 ngày làm việc.
                  </li>
                  <li>
                    2. Thẻ Visa/Master Card (nội địa): Hoàn tiền trong 7 đến 15
                    ngày làm việc.
                  </li>
                  <li>
                    3. Thẻ Visa/Master Card (quốc tế): Hoàn tiền từ 30 đến 45
                    ngày làm việc.
                  </li>
                  <li>4. Momo: Hoàn tiền trong vòng 24 giờ làm việc</li>
                </ul>

                <ul>
                  <li className="italic font-medium">Lưu ý: </li>

                  <li>
                    1. Chính sách hoàn tiền không áp dụng cho trường hợp người
                    dùng lựa chọn và thực hiện phương thức thanh toán đặt phòng
                    tại khách sạn.
                  </li>

                  <li>
                    2. Thời gian hoàn tiền cho chính sách này không bao gồm thứ
                    7, chủ nhật và các ngày lễ và sẽ phụ thuộc vào chính sách
                    riêng của các Người cung cấp dịch vụ cung cấp nền tảng thanh
                    toán.
                  </li>

                  <li>
                    3. Không áp dụng hoàn tiền một phần cho bất kỳ các loại đặt
                    phòng trả trước. Yêu cầu hoàn tiền chỉ được áp dụng cho toàn
                    bộ thời gian lưu trú tại cơ sở lưu trú của cùng một mã đặt
                    phòng và đáp ứng đầy đủ điều kiện tại Chính sách hủy đặt
                    phòng.
                  </li>

                  <li>
                    4. Tùy theo chính sách của từng khách sạn mà đặt phòng cần
                    hủy có thể phát sinh phí hủy phòng.
                  </li>
                </ul>
              </ul>
            </ul>

            <ul>
              <li className="font-medium" id="delivery-handle">
                5. Chính sách kiểm hàng{" "}
              </li>
              <li>
                TripC là Ứng dụng cung cấp dịch vụ du lịch. Vì vậy, TripC không
                có chính sách kiểm hàng.
              </li>
            </ul>

            <ul>
              <li className="font-medium" id="delivery-warranty">
                6. Chính sách bảo hành
              </li>
              <li>
                TripC là Ứng dụng cung cấp dịch vụ du lịch. Vì vậy, TripC không
                có chính sách bảo hành.
              </li>
            </ul>

            <ul>
              <li className="font-medium" id="delivery-complaint">
                7. Quy trình giải quyết tranh chấp, khiếu nại:
              </li>

              <li>
                Khi phát sinh tranh chấp hoặc khiếu nại, TripC khuyến khích giải
                pháp thương lượng, hòa giải giữa các bên để đạt được sự đồng
                thuận về phương án giải quyết. Nếu hai bên không thể thương
                lượng với nhau và yêu cầu TripC đứng ra giải quyết vụ việc. Khi
                đó, quyết định của TripC là quyết định cuối cùng.
              </li>

              <ul>
                <li className="font-medium">
                  Đầu mối tiếp nhận giải quyết tranh chấp:
                </li>

                <li>CÔNG TY CỔ PHẦN ALLY AI VIỆT NAM </li>

                <li>
                  * Địa chỉ: 3153 Đống Đa, Phường Thạch Thang, Quận Hải Châu,
                  Thành phố Đà Nẵng.
                </li>

                <li>* Email: cs@tripc.ai</li>

                <li>* Hotline: 0935479122</li>

                <ul>
                  <li>
                    Tranh chấp hoặc khiếu nại sẽ được chúng tôi tiếp nhận và xử
                    lý theo trình tự sau đây:
                  </li>

                  <li>
                    Bước 1: TripC tiếp nhận thông tin khiếu nại, tranh chấp.
                  </li>

                  <li>Bước 2: TripC xác thực thông tin.</li>
                  <li>
                    Bước 3: TripC đứng ra làm bên thứ 3 hòa giải cho các thành
                    viên (nếu là tranh chấp giữa Người mua và Nhà cung cấp),
                    hoặc tiến hành thương lượng với thành viên (nếu là tranh
                    chấp giữa thành viên với TripC) trong 7-10 ngày làm việc kể
                    từ thời điểm nhận được thông tin.
                  </li>

                  <li>
                    Bước 4: Giải quyết tranh chấp theo thương lượng, hòa giải
                    nếu thương lượng/hòa giải thành.
                  </li>

                  <li>
                    Bước 5: Nếu thương lượng hòa giải không thành, tranh chấp sẽ
                    được giải quyết tại Tòa án nhân dân có thẩm quyền. Phán
                    quyết của tòa có giá trị ràng buộc với các bên.
                  </li>
                </ul>

                <ul>
                  <li>Cụ thể:</li>

                  <ul>
                    <li className="font-medium">
                      + Đối với trường hợp phát sinh tranh chấp giữa Nhà cung
                      cấp với Người mua:
                    </li>

                    <li>
                      Các bên phải có vai trò trách nhiệm trong việc tích cực
                      giải quyết vấn đề.
                    </li>

                    <li>
                      Ứng dụng cung cấp dịch vụ TMĐT TripC có trách nhiệm đứng
                      ra làm trung gian để tiếp nhận thông tin từ Người sử dụng
                      dịch vụ – chuyển thông tin đến cho Người cung cấp dịch vụ,
                      thực hiện hòa giải giữa Hai bên và thúc đẩy quá trình giải
                      quyết vụ việc giữa Hai bên.
                    </li>

                    <li>
                      Đối với Người cung cấp dịch vụ: cần có trách nhiệm cung
                      cấp văn bản giấy tờ chứng thực thông tin liên quan đến sự
                      việc đang gây mâu thuẫn cho Người sử dụng dịch vụ. Về phía
                      TripC, chúng tôi sẽ có trách nhiệm cung cấp những thông
                      tin liên quan đến một bên thành viên nếu được bên còn lại
                      yêu cầu.
                    </li>

                    <li>
                      Sau khi Người sử dụng dịch vụ và Người cung cấp dịch vụ đã
                      giải quyết xong tranh chấp, các bên phải có trách nhiệm
                      báo lại cho Ban quản lý Ứng dụng cung cấp dịch vụ TMĐT
                      TripC. Trong trường hợp giao dịch phát sinh mâu thuẫn mà
                      lỗi thuộc về Người cung cấp dịch vụ: TripC sẽ có biện pháp
                      cảnh cáo, khóa tài khoản hoặc chuyển cho cơ quan pháp luật
                      có thẩm quyền tùy theo mức độ của sai phạm. Công ty sẽ
                      chấm dứt và gỡ bỏ toàn bộ tin bài về bài đăng dịch vụ lưu
                      trú của Người cung cấp dịch vụ đó trên Ứng dụng cung cấp
                      dịch vụ TMĐT TripC. Đồng thời, chúng tôi sẽ yêu cầu Người
                      cung cấp dịch vụ bồi thường, bồi hoàn cho Người sử dụng
                      dịch vụ thoả đáng.
                    </li>

                    <li>
                      Nếu thông qua hình thức thỏa thuận mà vẫn không thể giải
                      quyết được mâu thuẫn phát sinh từ giao dịch giữa 2 bên
                      Người sử dụng dịch vụ và Người cung cấp dịch vụ, một trong
                      hai bên có quyền đưa vụ việc ra giải quyết tại Tòa án nhân
                      dân có thẩm quyền.
                    </li>

                    <li>
                      Chúng tôi - TripC luôn tôn trọng và nghiêm túc thực hiện
                      các quy định của pháp luật về bảo vệ quyền lợi của Người
                      sử dụng dịch vụ (người tiêu dùng). Mọi hành vi lừa đảo,
                      gian lận trong kinh doanh đều bị lên án và phải chịu hoàn
                      toàn trách nhiệm trước pháp luật.
                    </li>
                  </ul>

                  <ul>
                    <li className="font-medium">
                      + Đối với trường hợp phát sinh tranh chấp giữa thành viên
                      (người dùng nói chung) với TripC
                    </li>

                    <li>
                      TripC có trách nhiệm lớn nhất trong việc giải quyết mâu
                      thuẫn, hòa giải, đảm bảo lợi ích của thành viên. Nếu mâu
                      thuẫn được xác định là lỗi của TripC, Ban quản trị ứng
                      dụng sẽ nhanh chóng đưa ra phương án giải quyết để đạt
                      được các tiêu chí do bên còn lại đặt ra. Ngược lại, mâu
                      thuẫn phát sinh do lỗi của thành viên, TripC sẽ gửi thông
                      báo chỉnh sửa hoặc thay đổi theo đúng quy định của TripC
                      để chấm dứt mâu thuẫn, có thể áp dụng các biện pháp cảnh
                      cáo, khóa tài khoản, thậm chí chấm dứt toàn bộ giao dịch
                      của họ trên ứng dụng nếu cần thiết.
                    </li>

                    <li>
                      Nếu việc thỏa thuận không đạt được kết quả như hai bên
                      mong muốn, một trong các bên có quyền đưa vụ việc ra giải
                      quyết tại Tòa án nhân dân có thẩm quyền.
                    </li>

                    <li>
                      TripC cam kết giải quyết mọi tranh chấp, khiếu nại trên cơ
                      sở khách quan, dựa trên thỏa thuận hợp đồng và quy định
                      pháp luật.
                    </li>
                  </ul>
                </ul>
              </ul>
            </ul>
          </ul>
        </ul>

        <ul className="mt-4">
          <li className="text-lg font-medium" id="payment-procedure">
            IV. Quy trình thanh toán
          </li>

          <ul>
            <li className="font-medium">
              <span className="">4.1 </span>
              Thanh toán giữa Người sử dụng dịch vụ - Người cung cấp dịch vụ
            </li>

            <ul>
              <li className="italic font-medium">
                * Thanh toán qua chủ ứng dụng (đối với dịch vụ thanh toán trực
                tuyến trên ứng dụng TripC)
              </li>

              <li>
                -Bước 1: Người dùng lựa chọn thông tin địa điểm, thời gian và
                đặt dịch vụ;
              </li>

              <li>
                -Bước 2: Người dùng xác thực đặt dịch vụ và thanh toán trực
                tuyến theo hướng dẫn trên hệ thống;
              </li>

              <li>
                -Bước 3: CÔNG TY CỔ PHẦN ALLY AI chuyển thông tin đơn hàng sang
                cho Nhà cung cấp;
              </li>

              <li>
                -Bước 4: Nhà cung cấp xác nhận đặt dịch vụ cho Người dùng, người
                dùng đến theo lịch hẹn để sử dụng dịch vụ;
              </li>

              <li>
                -Bước 5: Nhà cung cấp và TripC thực hiện đối soát định kỳ. TripC
                hoàn trả tiền đặt dịch vụ cho các Nhà cung cấp sau khi đã trừ đi
                khoản phí nền tảng theo thỏa thuận;
              </li>
            </ul>
          </ul>

          <ul>
            <li className="italic font-medium">
              * Thanh toán cho người cung cấp dịch vụ (khi khách hàng đến sử
              dụng dịch vụ tại nơi cung cấp)
            </li>

            <li>
              -Bước 1: Người dùng lựa chọn thông tin địa điểm, thời gian và đặt
              dịch vụ;
            </li>

            <li>-Bước 2: Người dùng xác thực đặt dịch vụ;</li>

            <li>
              -Bước 3: CÔNG TY CỔ PHẦN ALLY AI chuyển thông tin đơn hàng sang
              cho Nhà cung cấp;
            </li>

            <li>
              -Bước 4: Nhà cung cấp xác nhận đặt dịch vụ cho Người dùng; người
              dùng đến theo lịch hẹn để sử dụng dịch vụ;
            </li>

            <li>
              -Bước 5: Nhà cung cấp và TripC thực hiện đối soát định kỳ. Nhà
              cung cấp hoàn trả tiền khoản phí nền tảng theo thỏa thuận với
              TripC;
            </li>
          </ul>
        </ul>

        <ul className="mt-4">
          <li className="text-lg font-medium" id="secure-transactions">
            V. Đảm bảo an toàn giao dịch
          </li>

          <ul>
            <li>
              Ban quản trị đã sử dụng các dịch vụ bảo mật để bảo vệ các thông
              tin mà thành viên đăng tải trên TripC. Để đảm bảo các giao dịch
              được tiến hành thành công, hạn chế tối đa rủi ro có thể phát sinh,
              Người cung cấp dịch vụ cần cung cấp thông tin đầy đủ (tên, địa
              chỉ, số điện thoại, email) trong mỗi bài đăng lưu trú.
            </li>

            <li>
              Người sử dụng dịch vụ không nên đưa thông tin chi tiết về việc
              thanh toán với bất kỳ ai qua email hoặc hình thức liên lạc khác.
              TripC không chịu trách nhiệm về những thiệt hại hay rủi ro mà
              thành viên có thể gánh chịu khi trao đổi thông tin qua Internet
              hoặc email.
            </li>

            <li>
              Thành viên tuyệt đối không được sử dụng bất kỳ chương trình, công
              cụ hay hình thức nào khác để can thiệp vào hệ thống hay làm thay
              đổi cấu trúc dữ liệu. Nghiêm cấm việc phát tán, truyền bá hay cổ
              vũ cho bất kỳ hoạt động nào nhằm can thiệp, phá hoại hay xâm nhập
              hệ thống Ứng dụng. Mọi vi phạm sẽ bị xử lý theo Quy chế và quy
              định của pháp luật.
            </li>

            <li>
              Mọi thông tin giao dịch được bảo mật, trừ trường hợp buộc phải
              cung cấp khi Cơ quan pháp luật yêu cầu.
            </li>
          </ul>
        </ul>

        <ul className="mt-4">
          <li className="text-lg font-medium" id="technical-responsibility">
            VI. Trách nhiệm trong trường hợp phát sinh sự cố kỹ thuật
          </li>

          <ul>
            <li>
              Khi thực hiện các giao dịch trên Ứng dụng, bắt buộc các thành viên
              phải thực hiện đúng theo các quy trình hướng dẫn.
            </li>

            <li>
              Ban quản lý Ứng dụng cung cấp dịch vụ TMĐT TripC cam kết nỗ lực
              đảm bảo sự an toàn và ổn định cho các thành viên tham gia giao
              dịch. Trường hợp phát sinh lỗi kỹ thuật, lỗi phần mềm hoặc các lỗi
              khách quan khác dẫn đến thành viên không thể tham gia giao dịch
              được thì các Thành viên thông báo cho Ban quản lý Ứng dụng cung
              cấp dịch vụ TMĐT qua Hotline: 0935479122. Chúng tôi sẽ khắc phục
              lỗi trong thời gian sớm nhất, tạo điều kiện cho các Thành viên
              tham gia Ứng dụng cung cấp dịch vụ TMĐT TripC.
            </li>

            <li>
              Tuy nhiên, Ban quản lý Ứng dụng cung cấp dịch vụ TMĐT TripC sẽ
              không chịu trách nhiệm giải quyết trong trường hợp thông báo của
              các Thành viên không đến được Ban quản lý, phát sinh từ lỗi kỹ
              thuật, lỗi đường truyền, phần mềm hoặc các lỗi khác không do Ban
              quản lý gây ra.
            </li>
          </ul>
        </ul>

        <ul className="mt-4">
          <li className="text-lg font-medium" id="personal-infor-policy">
            VII. Chính sách Bảo vệ thông tin cá nhân của người tiêu dùng
          </li>

          <ul>
            <li className="font-medium">Mục đích và phạm vi thu thập</li>

            <ul>
              <li>+ Mục đích thu thập thông tin:</li>

              <li>
                Chúng tôi thu thập thông tin cá nhân chỉ cần thiết nhằm phục vụ
                cho các mục đích sau đây:
              </li>

              <li>
                Đơn Hàng: để xử lý các vấn đề liên quan đến đơn đặt hàng của
                bạn;
              </li>
              <li>
                Duy Trì Tài Khoản: để tạo và duy trình tài khoản của bạn với
                chúng tôi, bao gồm cả các chương trình khách hàng thân thiết
                hoặc các chương trình thưởng đi kèm với tài khoản của bạn.
              </li>

              <li>
                Dịch Vụ Người Tiêu Dùng, Dịch Vụ Chăm Sóc Khách Hàng: bao gồm
                các phản hồi cho các yêu cầu, khiếu nại và phản hồi của bạn;
              </li>

              <li>
                Cá Nhân Hóa: Chúng tôi có thể tổ hợp dữ liệu được thu thập để có
                một cái nhìn hoàn chỉnh hơn về một người tiêu dùng và từ đó cho
                phép chúng tôi phục vụ tốt hơn với sự cá nhân hóa mạnh hơn ở các
                khía cạnh, bao gồm nhưng không giới hạn: (i) để cải thiện và cá
                nhân hóa trải nghiệm của bạn trên Ứng dụng thương mại điện tử
                TripC (ii) để cải thiện các tiện ích, dịch vụ, điều chỉnh chúng
                phù hợp với các nhu cầu được cá thể hóa và đi đến những ý tưởng
                dịch vụ mới (iii) để phục vụ bạn với những giới thiệu, quảng cáo
                được điều chỉnh phù hợp với sự quan tâm của bạn.
              </li>

              <li>
                An Ninh: cho các mục đích ngăn ngừa các hoạt động phá hủy tài
                khoản người dùng của khách hàng hoặc các hoạt động giả mạo khách
                hàng.
              </li>

              <li>
                Theo yêu cầu của pháp luật: tùy quy định của pháp luật vào từng
                thời điểm, chúng tôi có thể thu thập, lưu trữ và cung cấp theo
                yêu cầu của cơ quan nhà nước có thẩm quyền.
              </li>

              <li>+ Phạm vi thu thập: </li>

              <li>
                <span className="italic underline mr-1">
                  Đối với Người bán:
                </span>
                TripC thu thập các thông tin về: Địa chỉ email, mật khẩu, họ
                tên, số điện thoại, mã số thuế/ngày cấp/nơi cấp.
              </li>
              <li>
                <span className="italic underline mr-1">
                  Đối với Người mua:
                </span>
                TripC thu thập các thông tin sau: Họ và tên; địa chỉ; số điện
                thoại; email.
              </li>
            </ul>
          </ul>

          <ul>
            <li className="font-medium">- Phạm vi sử dụng thông tin:</li>

            <li>
              TripC sẽ sử dụng những thông tin cá nhân mà Khách hàng cung cấp để
              thực hiện các công việc sau:
            </li>

            <li>
              + Hỗ trợ Khách hàng giải đáp mọi thắc mắc, băn khoăn liên quan đến
              các sản phẩm/dịch vụ mà Khách hàng quan tâm;
            </li>

            <li>
              + Cung cấp thông tin liên quan đến sản phẩm và các ưu đãi/khuyến
              mại mới dành cho Khách hàng nếu Khách hàng đăng ký nhận email
              thông báo;
            </li>

            <li>
              + Ngăn ngừa các hoạt động phá hủy tài khoản người dùng của Khách
              hàng hoặc các hoạt động giả mạo thành viên;
            </li>

            <li>
              + Liên lạc và giải quyết với Khách hàng trong những trường hợp đặc
              biệt.
            </li>

            <li>
              + Hỗ trợ hệ thống chăm sóc khách hàng, quản lý khách hàng, chăm
              sóc và nhận ý kiến phản hồi từ phía khách hàng của TripC.
            </li>

            <li>
              + Trong trường hợp có yêu cầu của pháp luật: giao dịch TMĐT TripC
              có trách nhiệm hợp tác cung cấp thông tin cá nhân thành viên khi
              có yêu cầu từ cơ quan tư pháp gồm: Viện kiểm sát, Tòa án, Cơ quan
              Công an điều tra liên quan đến hành vi vi phạm pháp luật nào đó
              của Khách hàng.
            </li>
          </ul>

          <ul>
            <li className="font-medium">
              - Các bên thứ ba được quyền tiếp cận thông tin cá nhân của Khách
              hàng:
            </li>

            <li>
              Chúng tôi sẽ không cung cấp thông tin cá nhân của bạn cho bất kỳ
              bên thứ ba nào, trừ một số hoạt động cần thiết dưới đây:
            </li>

            <li>
              Các Người cung cấp dịch vụ là bên cung cấp dịch vụ cho chúng tôi
              liên quan đến thực hiện đơn hàng và chỉ giới hạn trong phạm vi
              thông tin cần thiết cũng như áp dụng các quy định đảm bảo an ninh,
              bảo mật các thông tin cá nhân.
            </li>

            <li>
              Chúng tôi có thể sử dụng dịch vụ từ một nhà cung cấp dịch vụ là
              bên thứ ba để thực hiện một số hoạt động liên quan đến Ứng dụng
              TripC và khi đó bên thứ ba này có thể truy cập hoặc xử lý các
              thông tin cá nhân trong quá trình cung cấp các dịch vụ đó. Chúng
              tôi yêu cầu các bên thứ ba này tuân thủ mọi luật lệ về bảo vệ
              thông tin cá nhân liên quan và các yêu cầu về an ninh liên quan
              đến thông tin cá nhân.
            </li>

            <li>
              Yêu cầu pháp lý: Chúng tôi có thể tiết lộ các thông tin cá nhân
              nếu điều đó do luật pháp quy định và việc tiết lộ như vậy là cần
              thiết một cách hợp lý để tuân thủ các quy trình pháp lý.
            </li>

            <li>
              Chuyển giao kinh doanh (nếu có): trong trường hợp sáp nhập, hợp
              nhất toàn bộ hoặc một phần với công ty khác, người mua sẽ có quyền
              truy cập thông tin được chúng tôi lưu trữ, duy trì trong đó bao
              gồm cả thông tin cá nhân.
            </li>
          </ul>

          <ul>
            <li className="font-medium">- Thời gian lưu trữ thông tin:</li>

            <li>
              Thông tin cá nhân của khách hàng sẽ được lưu trữ cho đến khi khách
              hàng có yêu cầu hủy bỏ hoặc khách hàng tự đăng nhập và thực hiện
              hủy bỏ. Trong mọi trường hợp thông tin cá nhân của khách hàng sẽ
              được bảo mật trên máy chủ của TripC.
            </li>
          </ul>

          <ul>
            <li className="font-medium">
              - Địa chỉ của đơn vị thu thập và quản lý thông tin cá nhân:
            </li>
            <li>
              <span className="italic">Tên đơn vị:</span> CÔNG TY CỔ PHẦN ALLY
              AI
            </li>
            <li>
              <span className="italic">Mã số thuế:</span> 0402251123
            </li>

            <li>
              <span className="italic">Trụ sở chính:</span> 153 Đống Đa, Phường
              Thạch Thang, Quận Hải Châu, Thành phố Đà Nẵng.
            </li>

            <li>
              <span className="italic">Hotline:</span> 0935479122
            </li>

            <li>
              <span className="italic">Email:</span> cs@tripc.ai
            </li>
          </ul>

          <ul>
            <li className="font-medium">
              - Phương tiện và công cụ để người dùng tiếp cận và chỉnh sửa dữ
              liệu cá nhân của mình:
            </li>

            <li>
              Người dùng có quyền tiếp cận để tự kiểm tra, cập nhật, chỉnh sửa
              hoặc hủy bỏ các dữ liệu cá nhân của mình bằng cách đăng nhập vào
              tài khoản của mình trên TripC và chỉnh sửa thông tin cá nhân, hoặc
              người dùng có thể yêu cầu TripC hỗ trợ thực hiện việc này.
            </li>

            <li>
              Việc đăng nhập vào Ứng dụng của TripC có thể thực hiện trên máy
              tính, điện thoại, hay các công cụ khác có tính năng truy cập vào
              Ứng dụng.
            </li>
          </ul>

          <ul>
            <li className="font-medium">
              - Cam kết bảo mật thông tin cá nhân khách hàng
            </li>

            <li>
              Thông tin cá nhân của người dùng trên TripC được cam kết bảo mật
              theo chính sách bảo vệ thông tin cá nhân. Việc thu thập và sử dụng
              thông tin của người dùng chỉ được thực hiện khi có sự đồng ý của
              người dùng trừ những trường hợp pháp luật có quy định khác hoặc
              thỏa thuận khác. Chúng tôi cam kết rằng:
            </li>

            <li>
              -Không sử dụng, không chuyển giao, cung cấp hay tiết lộ cho bên
              thứ 3 nào về thông tin cá nhân của người dùng khi không có sự cho
              phép đồng ý từ người dùng nhằm trục lợi.
            </li>

            <li>
              -Trong trường hợp máy chủ lưu trữ thông tin bị hacker tấn công dẫn
              đến mất mát dữ liệu cá nhân của thành viên, TripC sẽ có trách
              nhiệm thông báo vụ việc cho cơ quan chức năng điều tra xử lý kịp
              thời và thông báo cho người dùng được biết.
            </li>
            <li>
              -Chúng tôi yêu cầu các cá nhân khi đăng ký tài khoản và sử dụng
              dịch vụ trên TripC phải cung cấp đầy đủ thông tin cá nhân có liên
              quan và chịu trách nhiệm về tính chính xác, pháp lý và cập nhật
              của những thông tin trên. Công ty không chịu trách nhiệm cũng như
              không giải quyết mọi khiếu nại có liên quan đến quyền lợi của
              người dùng nếu xét thấy thông tin cá nhân của người dùng đó cung
              cấp là không chính xác.
            </li>

            <li>
              -TripC sẽ không chịu trách nhiệm trong trường hợp thông tin cá
              nhân bị rò rỉ phát sinh từ lỗi kỹ thuật, lỗi đường truyền, lỗi
              phần mềm hoặc lỗi khác không phải do công ty gây ra.
            </li>

            <ul>
              <li className="italic">
                Ứng dụng thiết lập hệ thống bảo vệ thông tin cá nhân người sử
                dụng qua các hình thức sau:
              </li>

              <ul>
                <li>
                  1. Thiết lập hệ thống tường lửa ngăn ngừa các hình thức tấn
                  công mạng.
                </li>

                <li>
                  2. Đội ngũ kỹ thuật, nhân viên của doanh nghiệp thường xuyên
                  túc trực theo dõi toàn bộ hoạt động của trang mạng. Đảm bảo
                  mọi cuộc tấn công từ các phía đều được phát hiện kịp thời và
                  thực hiện biện pháp ngăn chặn.
                </li>

                <li>
                  3. Các thông tin cá nhân, thông tin riêng của người sử dụng sẽ
                  được lưu trữ theo các quy định của Công ty và thực hiện bảo
                  mật nghiêm ngặt theo các quy định của pháp luật.
                </li>
              </ul>
            </ul>
          </ul>

          <ul>
            <li className="font-medium">
              - Chính sách Bảo mật thanh toán trực tuyến
            </li>

            <li>
              Chính sách giao dịch thanh toán bằng thẻ nội địa và thẻ quốc tế
              đảm bảo tuân thủ các tiêu chuẩn bảo mật của các Đối Tác Cổng Thanh
              Toán/ví điện tử gồm:
              <ul>
                <li>
                  - Tiêu chuẩn bảo mật dữ liệu trên internet SSL (Secure Sockets
                  Layer) do GlobalSign cấp. Chứng nhận tiêu chuẩn bảo mật dữ
                  liệu thông tin thanh toán (PCI DSS) do Trustwave cung cấp.
                </li>

                <li>- Tiêu chuẩn mã hóa MD5 128 bit.</li>
                <li>
                  - Các nguyên tắc và quy định bảo mật thông tin trong ngành tài
                  chính ngân hàng theo quy định của Ngân hàng nhà nước Việt Nam.
                </li>
              </ul>
            </li>

            <li>
              - Thông tin Thẻ thanh toán của khách hàng không lưu trên hệ thống
              của ứng dụng mà được lưu giữ và bảo mật theo tiêu chuẩn quốc tế
              PCI DSS trên các Đối Tác Cổng Thanh Toán/ví điện tử.
            </li>

            <li>
              - Khách hàng truy cập vào ứng dụng thông qua giao thức HTTPS.
            </li>

            <li>
              - Khách hàng có tuỳ chọn sử dụng OTP để truy cập và giao dịch.
            </li>

            <li>
              - Hệ thống nội bộ giữa các modules của Đối Tác Cổng Thanh Toán/ví
              điện tử sử dụng các phương thức trao đổi mã hoá keys: Các hệ thống
              ứng dụng trao đổi dữ liệu nội bộ được mã hoá bằng bộ khóa private
              & public key đảm bảo tính bảo mật và toàn vẹn dữ liệu.
            </li>

            <li>
              - Chính sách bảo mật giao dịch trong thanh toán của TripC áp dụng
              với Khách hàng trên nền tảng:
              <ul>
                <li>
                  - TripC không trực tiếp lưu trữ thông tin thẻ của khách hàng.
                  Việc bảo mật thông tin thẻ của Khách hàng được thực hiện bởi
                  Đối Tác Cổng Thanh Toán/ví điện tử.
                </li>

                <li>
                  - Đối với thẻ quốc tế: thông tin thẻ thanh toán của Khách hàng
                  mà có khả năng sử dụng để xác lập giao dịch không được lưu trữ
                  trên hệ thống của TripC. Đối Tác Cổng Thanh Toán/ví điện tử sẽ
                  lưu trữ và bảo mật các thông tin này.
                </li>

                <li>
                  - Đối với thẻ nội địa: TripC chỉ lưu trữ mã đơn hàng/đặt hẹn,
                  mã giao dịch và tên ngân hàng.
                </li>

                <li>
                  - TripC cam kết đảm bảo thực hiện nghiêm túc các biện pháp bảo
                  mật cần thiết cho mọi hoạt động thanh toán thực hiện trên Ứng
                  dụng.
                </li>
              </ul>
            </li>
            <li>
              - Các lưu ý khi thanh toán qua mạng:
              <ul>
                <li>
                  - Chỉ sử dụng trang web có chứng chỉ thanh toán an toàn.
                </li>

                <li>
                  - Tuyệt đối không cho người khác mượn thẻ hoặc tài khoản của
                  mình để thực hiện thanh toán tại ứng dụng.
                </li>

                <li>
                  - Trong trường hợp phát sinh các giao dịch ngoài ý muốn trên
                  TripC, khách hàng vui lòng liên hệ với Tổng đài CSKH được công
                  cố trên ứng dụng và Tổng đài của Cổng thanh toán/Ngân hàng mà
                  phát sinh giao dịch đó.
                </li>

                <li>
                  - Kiểm tra tài khoản ngân hàng của mình thường xuyên để đảm
                  bảo tất cả giao dịch qua thẻ đều nằm trong tầm kiểm soát.
                </li>
              </ul>
            </li>
          </ul>

          <ul>
            <li className="font-medium">
              - Cơ chế tiếp nhận và giải quyết khiếu nại của người tiêu dùng
              liên quan đến việc thông tin cá nhân bị sử dụng sai mục đích hoặc
              phạm vi đã thông báo:
            </li>

            <ul>
              <li>
                Khi người tiêu dùng phát hiện thông tin cá nhân của mình trên
                TripC bị sử dụng sai mục đích hoặc ngoài phạm vi sử dụng thông
                tin, người tiêu dùng có thể gửi khiếu nại đến CÔNG TY CỔ PHẦN
                ALLY AI theo các cách thức sau:
              </li>

              <li>-Gọi điện thoại đến số hotline: 0935479122</li>
              <li>-Gửi email khiếu nại đến địa chỉ: cs@tripc.ai </li>
              <li>
                -Gửi văn bản khiếu nại theo đường bưu điện đến hoặc gửi trực
                tiếp tại trụ sở công ty, địa chỉ 153 Đống Đa, Phường Thạch
                Thang, Quận Hải Châu, Thành phố Đà Nẵng.
              </li>

              <li>
                Thời hạn để Công ty xử lý phản ánh liên quan đến thông tin cá
                nhân khách hàng là 07 ngày làm việc, kể từ ngày tiếp nhận được
                khiếu nại của Khách hàng.
              </li>
              <li>
                Trong mọi trường hợp, TripC đề cao việc thương lượng, hòa giải
                với Khách hàng để thống nhất và đưa ra biện pháp giải quyết, xử
                lý khiếu nại.
              </li>
              <li>
                Trong trường hợp hai bên không đạt được sự thỏa thuận như mong
                muốn dẫn đến thương lượng, hòa giải không thành, một trong hai
                bên có quyền đưa vụ việc ra tòa án nhân dân có thẩm quyền để
                giải quyết theo quy định của pháp luật.
              </li>
            </ul>
          </ul>
        </ul>

        <ul className="mt-4">
          <li className="text-lg font-medium" id="app-management">
            VIII. Quản lý thông tin trên Ứng dụng
          </li>

          <li>
            <div className="flex gap-2">
              <p>Cơ chế kiểm soát tự động</p>
              <p> Cơ chế kiểm soát riêng</p>
            </div>
            <div className="flex gap-2">
              <p> Có quy định về đăng thông tin</p>
              <p> Cơ chế giám sát khác </p>
            </div>
          </li>

          <ul>
            <li className="font-medium">
              - Quản lý, kiểm soát thông tin Nhà cung cấp dịch vụ:
            </li>

            <ul>
              <li>
                <span className="font-medium">+ Bước 1:</span> Liên hệ để được
                tư vấn và trở thành Nhà cung cấp trên ứng dụng TripC qua email
                cs@tripc.ai hoặc số điện thoại: 0935479122
                <div className="flex justify-center">
                  <img
                    src="https://d3strovqzyyr8u.cloudfront.net/images/4b364fe3-4ceb-4731-acff-4b106fdb8e89/contact-tripc.png"
                    alt=""
                    className="object-contain h-96 my-2 "
                  />
                </div>
              </li>

              <li>
                <span className="font-medium">+ Bước 2:</span> TripC thu thập
                các thông tin sau của Nhà cung cấp:
                <ul>
                  <li>- Tên địa điểm</li>
                  <li>
                    - Hồ sơ pháp lý: Nhà cung cấp gửi kèm bản scan các tài liệu
                    sau:
                  </li>
                  <li>
                    - Giấy chứng nhận đăng ký doanh nghiệp/Giấy chứng nhận đăng
                    ký kinh doanh/Giấy chứng nhận đầu tư đối với doanh nghiệp và
                    nhà đầu tư nước ngoài/Giấy chứng nhận đăng ký hộ kinh doanh
                    (sau đây gọi chung là “Giấy đăng ký kinh doanh”)
                  </li>

                  <li>
                    - Giấy chứng nhận đăng ký mã số thuế (Trường hợp Hộ kinh
                    doanh)
                  </li>

                  <li>
                    - Giấy phép kinh doanh có điều kiện (Giấy phép đủ điều kiện
                    kinh doanh lữ hành quốc tế/nội địa (nếu có)/ Giấy chứng nhận
                    an toàn thực phẩm/ Phòng cháy chữa cháy/ An ninh trật tự …)
                  </li>

                  <li>- Số điện thoại liên hệ - Tên người liên hệ.</li>
                </ul>
              </li>

              <li>
                <span className="font-medium">+ Bước 3:</span> Sau khi nhận được
                đầy đủ các giấy tờ pháp lý cần thiết từ Người cung cấp dịch vụ,
                Phòng ban chuyên môn sẽ chịu trách nhiệm kiểm tra, tiến hành quy
                trình rà soát trước khi quyết định giao kết hợp đồng cung cấp
                dịch vụ TMĐT với Người cung cấp dịch vụ. Cụ thể: để kiểm tra
                được tính chính xác về các giấy tờ hồ sơ của các đơn vị nhà cung
                cấp, phòng ban chuyên môn của Boki.vn sẽ đối chiếu dữ liệu trên
                Cổng thông tin quốc gia về đăng ký doanh nghiệp và tra cứu trên
                ứng dụng của tổng cục thuế, tên miền
                <a href="https://tracuunnt.gdt.gov.vn/">
                  https://tracuunnt.gdt.gov.vn/
                </a>
                với thông tin mà đối tác cung cấp. Nếu trong trường hợp thông
                tin cung cấp không chính xác hoặc có sai lệch, TripC sẽ tiến
                hành liên hệ và xác minh lại thông tin với nhà cung cấp trước
                khi cấp phép trở thành người bán.
                <div className="flex justify-center">
                  <img
                    src="https://d3strovqzyyr8u.cloudfront.net/images/3ce69205-4c9d-45d2-8d41-605df35b4969/tax-vn.png"
                    alt=""
                    className="object-contain h-60 my-2 "
                  />
                </div>
              </li>

              <li>
                Trong trường hợp thông tin cung cấp chưa đầy đủ thì TripC sẽ yêu
                cầu bổ sung thông tin đầy đủ và kiểm tra chính xác hoàn toàn thì
                mới cấp phép trở thành Người cung cấp dịch vụ. Sau khi xét duyệt
                hết các thông tin đã đủ điều kiện, TripC sẽ tiến hành ký hợp
                đồng cung cấp dịch vụ. Đồng thời sẽ thu thập thông tin dịch vụ
                của Nhà cung cấp để thực hiện rà soát, đăng tải lên ứng dụng
                tripC.
              </li>
            </ul>
          </ul>

          <ul>
            <li className="font-medium">
              - Quản lý, kiểm soát thông tin về dịch vụ được đăng tải trên Ứng
              dụng:
            </li>

            <ul>
              <li className="">
                <span className="font-medium italic">
                  - Quy định kiểm soát thông tin dịch vụ đăng tải trên Ứng dụng:
                </span>
                <ul>
                  <li>
                    + Sau khi Nhà cung cấp đăng ký thông tin qua và gửi email
                    cho TripC, thông tin sẽ được Ban quản trị Ứng dụng TripC thu
                    thập. Trường hợp thông tin của Nhà cung cấp đã rõ ràng và
                    đầy đủ, Quản trị viên của Ứng dụng có trách nhiệm đăng tải
                    công khai dịch vụ của Nhà cung cấp đó lên Ứng dụng TripC.
                  </li>

                  <li>
                    + Nhà cung cấp phải đảm bảo cung cấp đầy đủ thông tin về
                    dịch vụ của mình theo hướng dẫn, chú ý cung cấp đầy đủ hình
                    ảnh chụp cơ sở kinh doanh hoặc hình ảnh mô tả dịch vụ của
                    mình để Quản trị viên có cơ sở để đăng tải thông tin lên Ứng
                    dụng một cách rõ ràng.
                  </li>

                  <li>
                    + Đối với dịch vụ kinh doanh có điều kiện (ví dụ: dịch vụ
                    chăm sóc sức khỏe,…), Quản trị viên có quyền yêu cầu Nhà
                    cung cấp phải bổ sung thêm các hồ sơ, giấy phép, giấy chứng
                    nhận liên quan chứng minh Nhà cung cấp có đủ điều kiện để
                    kinh doanh dịch vụ đó.
                  </li>
                </ul>
              </li>

              <li className="font-medium italic">- Hành vi bị cấm</li>

              <ul>
                <li>
                  - Không được lợi dụng Ứng dụng để tuyên truyền, đề xướng, lôi
                  kéo với những nội dung không lành mạnh.
                </li>

                <li>
                  - Phải dùng ngôn từ trong sáng, rõ ràng, đúng chính tả, nghiêm
                  cấm mọi hình thức viết nhịu, viết tắt theo hình thức chát,
                  ngôn ngữ tối nghĩa.
                </li>

                <li>
                  - Không được phép đăng bán hoặc để chữ ký mang tính chất quảng
                  cáo, lôi kéo người mua hàng cho diễn đàn khác. Nếu vi phạm,
                  chúng tôi sẽ khóa tài khoản của Người bán mà không cần thông
                  báo trước. Nếu cố tình sẽ khóa tài khoản vĩnh viễn.
                </li>

                <li>
                  - Ngoài các nội dung trên, thành viên khi tham gia giao dịch
                  trên TripC, không được thực hiện các hoạt động sau:
                </li>

                <li>
                  - Quảng cáo làm tiết lộ bí mật nhà nước, phương hại đến độc
                  lập, chủ quyền quốc gia, an ninh, quốc phòng
                </li>

                <li>
                  - Quảng cáo thiếu thẩm mỹ, trái với truyền thống lịch sử, văn
                  hóa, đạo đức, thuần phong mỹ tục Việt Nam.
                </li>

                <li>
                  - Quảng cáo làm ảnh hưởng đến mỹ quan đô thị, trật tự an toàn
                  giao thông, an toàn xã hội
                </li>

                <li>
                  - Quảng cáo gây ảnh hưởng xấu đến sự tôn nghiêm đối với Quốc
                  kỳ, Quốc huy, Quốc ca, Đảng kỳ, anh hùng dân tộc, danh nhân
                  văn hóa, lãnh tụ, lãnh đạo Đảng, Nhà nước.
                </li>

                <li>
                  - Quảng cáo có tính chất kỳ thị dân tộc, phân biệt chủng tộc,
                  xâm phạm tự do tín ngưỡng, tôn giáo, định kiến về giới, về
                  người khuyết tật.
                </li>

                <li>
                  - Quảng cáo xúc phạm uy tín, danh dự, nhân phẩm của tổ chức,
                  cá nhân
                </li>

                <li>
                  - Quảng cáo có sử dụng hình ảnh, lời nói, chữ viết của cá nhân
                  khi chưa được cá nhân đó đồng ý, trừ trường hợp được pháp luật
                  cho phép.
                </li>

                <li>
                  - Quảng cáo không đúng hoặc gây nhầm lẫn về khả năng kinh
                  doanh, khả năng cung cấp sản phẩm, hàng hóa, dịch vụ của tổ
                  chức, cá nhân kinh doanh sản phẩm, hàng hóa, dịch vụ; về số
                  lượng, chất lượng, giá, công dụng, kiểu dáng, bao bì, nhãn
                  hiệu, xuất xứ, chủng loại, phương thức phục vụ, thời hạn bảo
                  hành của sản phẩm, hàng hoá, dịch vụ đã đăng ký hoặc đã được
                  công bố.
                </li>

                <li>
                  - Quảng cáo bằng việc sử dụng phương pháp so sánh trực tiếp về
                  giá cả, chất lượng, hiệu quả sử dụng dịch vụ của mình với giá
                  cả, chất lượng, hiệu quả sử dụng dịch vụ cùng loại của tổ
                  chức, cá nhân khác.
                </li>

                <li>
                  - Quảng cáo có sử dụng các từ ngữ “nhất”, “duy nhất”, “tốt
                  nhất”, “số một” hoặc từ ngữ có ý nghĩa tương tự mà không có
                  tài liệu hợp pháp chứng minh theo quy định của Bộ Văn hóa, Thể
                  thao và Du lịch.
                </li>

                <li>
                  - Quảng cáo có nội dung cạnh tranh không lành mạnh theo quy
                  định của pháp luật về cạnh tranh.
                </li>

                <li>- Quảng cáo vi phạm pháp luật về sở hữu trí tuệ.</li>

                <li>
                  - Quảng cáo tạo cho trẻ em có suy nghĩ, lời nói, hành động
                  trái với đạo đức, thuần phong mỹ tục gây ảnh hưởng xấu đến sức
                  khỏe, an toàn hoặc sự phát triển bình thường của trẻ em.
                </li>
              </ul>

              <li className="font-medium italic">
                - Danh sách các sản phẩm, dịch vụ cấm giao dịch tại Ứng dụng
                TripC
              </li>

              <li>
                + Súng săn và đạn súng săn, vũ khí thể thao, công cụ hỗ trợ;
              </li>
              <li>
                + Thuốc lá điếu, xì gà và các dạng thuốc lá thành phẩm khác;
              </li>
              <li>+ Rượu các loại;</li>

              <li>
                + Vũ khí quân dụng, trang thiết bị, kỹ thuật, khí tài phương
                tiện chuyên dung quân sự, công an, quân trang (bao gồm cả phù
                hiệu, cấp hiệu, quân hiệu của quân đội, công an), quân dụng cho
                lực lượng vũ trang; linh kiện, bộ phận, phụ tùng, vật tư và
                trang thiết bị đặc chủng, công nghệ chuyên dung chế tạo chúng;
              </li>

              <li>
                + Di vật, cổ vật, bảo vật quốc gia thuộc di tích lịch sử văn hóa
                và danh lam thắng cảnh, thuộc sở hữu toàn dân, sở hữu của các tổ
                chức chính trị, tổ chức chính trị - xã hội;
              </li>

              <li>+ Các chất ma túy;</li>

              <li>+ Hóa chất bảng 1 (theo công ước quốc tế);</li>

              <li>
                + Các sản phẩm văn hóa phản động, đồi trụy, mê tín di đoan hoặc
                có hại tới giáo dục thẩm mỹ, nhân cách;
              </li>

              <li>
                + Các loại pháo, thuốc pháo nổ, chất gây nổ nguy hiểm theo quy
                định của pháp luật;
              </li>

              <li>
                + Đồ chơi nguy hiểm, đồ chơi có hại tới giáo dục nhân cách và
                sức khỏe của trẻ em hoặc tới an ninh, trật tự, an toàn xã hội
                (bao gồm cả các chương trình trò chơi điện tử);
              </li>

              <li>
                + Thuốc thú y, thuốc bảo vệ thực vật cấm hoặc chưa được phép sử
                dụng tại Việt Nam theo quy định tại Pháp lệnh Thú ý, Pháp lệnh
                Bảo vệ và kiểm dịch thực vật;
              </li>
              <li>
                + Thực vật, động vật hoang dã (bao gồm cả vật sống và các bộ
                phận của chúng đó được chế biến) thuộc danh mục điều ước quốc tế
                mà Việt Nam là thành viên quy định và các loại thực vật, động
                vật quý hiếm thuộc danh mục cấm khai thác và sử dụng;
              </li>
              <li>
                + Thủy sản cấm khai thác, thủy sản có dư lượng chất độc hại vượt
                quá giới hạn cho phép, thủy sản có độc tố tự nhiên gây nguy hiểm
                đến tính mạng con người;
              </li>
              <li>
                + Phân bón không có trong danh mục được phép sản xuất, kinh
                doanh và sử dụng tại Việt Nam;
              </li>
              <li>
                + Giống cây trồng không có trong danh mục được phép sản xuất,
                kinh doanh; giống cây trồng gây hại đến sản xuất và sức khỏe con
                người, môi trường, hệ sinh thái;
              </li>
              <li>
                + Giống vật nuôi không có trong danh mục được phép sản xuất,
                kinh doanh; giống vật nuôi gây hại cho sức khỏe con người, nguồn
                gen vật nuôi, môi trường, hệ sinh thái;
              </li>
              <li>+ Khoáng sản đặc biệt, độc hại;</li>
              <li>+ Phế liệu nhập khẩu gây ô nhiễm môi trường;</li>
              <li>
                + Các loại thuốc chữa bệnh cho người, các loại vắc-xin, sinh
                phẩm y tế, mỹ phẩm, hóa chất và chế phẩm diệt con trùng, diệt
                khuẩn trong lĩnh vực gia dụng và y tế chưa được phép sử dụng tại
                Việt Nam;
              </li>
              <li>
                + Các loại trang thiết bị y tế chưa được phép sử dụng tại Việt
                Nam;
              </li>
              <li>
                + Các loại mỹ phẩm y tế chưa được công bố với cơ quan có thẩm
                quyền;
              </li>
              <li>
                + Phụ gia thực phẩm, chất hỗ trợ chế biến thực phẩm, vi chất
                dinh dưỡng, thực phẩm chức năng, thực phẩm có nguy cơ cao, thực
                phẩm được bảo quản bằng phương pháp chiếu xạ, thực phẩm có gen
                đã bị đổi chưa được cơ quan nhà nước có thẩm quyền cho phép;
              </li>
              <li>
                + Mua bán các loại xe không có giấy tờ hay mất giấy tờ (Chú ý
                khi mua bán xe phải có bên thứ 3 chứng giấy tờ);
              </li>
              <li>+ Sản phẩm, vật liệu có chứa amiang thuộc nhóm amphibole.</li>
              <li>
                + Các hàng hóa không đáp ứng quy định pháp luật về việc ghi nhãn
                hàng hóa.
              </li>
              <li>
                + Các hàng hóa, dịch vụ khác bị cấm hoặc hạn chế kinh doanh theo
                quy định của pháp luật hiện hành
              </li>
              <li>
                Danh sách này sẽ được cập nhật bổ sung khi có sự thay đổi của
                pháp luật Việt Nam hoặc từ phản ánh của cộng đồng.
              </li>
            </ul>

            <ul>
              <li className="font-medium">
                - Cơ chế rà soát, kiểm soát thông tin về đăng tin hàng hóa, dịch
                vụ của Ban quản lý Ứng dụng đối với việc đăng tin, quảng
                cáo/dịch vụ đăng tải trên Ứng dụng
              </li>

              <li>
                Bước 1: Người cung cấp dịch vụ cung cấp đầy đủ các thông tin:
                <ul>
                  <li>
                    + Đối với dịch vụ Tour & Trải nghiệm: Tên dịch vụ, địa điểm
                    cung cấp dịch vụ, ngày hiển thị, thời gian hiển thị, địa
                    điểm xuất phát, địa điểm đưa đón, thông tin lịch trình, điều
                    kiện đăng ký, giá dịch vụ, hình ảnh, các thông tin khác:
                    hoàn hủy đổi trả…
                  </li>

                  <li>
                    + Đối với dịch vụ Vui chơi: Tên dịch vụ, thời gian chuẩn bị,
                    ngày hiển thị, thời gian hiển thị, địa điểm xuất phát, địa
                    điểm đưa đón, thông tin lịch trình, điều kiện đăng ký, giá
                    dịch vụ, hình ảnh, các thông tin khác: hoàn hủy đổi trả…
                  </li>

                  <li>
                    + Đối với dịch vụ Đặt chỗ: Tên dịch vụ, thời gian chuẩn bị,
                    ngày hiển thị, sức chứa, hạng vé, giá vé, các thông tin lưu
                    ý…
                  </li>

                  <li>
                    + Đối với dịch vụ Di chuyển: Tên dịch vụ, địa điểm cung cấp
                    dịch vụ, ngày hiển thị, thời gian hiển thị, địa điểm xuất
                    phát, địa điểm đưa đón, thông tin lịch trình, điều kiện đăng
                    ký, giá dịch vụ, hình ảnh, các thông tin khác: hoàn hủy đổi
                    trả…
                  </li>

                  <li>
                    + Đối với dịch vụ ăn uống: Tên món, Mô tả, Hình ảnh, thông
                    tin chi tiết, điều kiện áp dụng, giá cả, các thông tin khác…
                  </li>

                  <li>
                    + Đối với dịch vụ sức khỏe & làm đẹp: Tên dịch vụ, Mô tả,
                    Hình ảnh, thông tin chi tiết, điều kiện áp dụng, giá cả, các
                    thông tin khác…
                  </li>

                  <li>
                    + Đối với dịch vụ Giải trí: Tên dịch vụ, Mô tả, Hình ảnh,
                    thông tin chi tiết, điều kiện áp dụng, giá cả, các thông tin
                    khác…
                  </li>
                  <li>
                    Khách hàng gửi thông tin trực tiếp về email cs@tripc.ai
                  </li>
                </ul>
              </li>

              <li>
                Bước 2: Các thông tin Người cung cấp dịch vụ cung cấp sẽ được
                Ban quản lý ứng dụng TripC kiểm duyệt nội dung trước khi chính
                thức đăng tải trên ứng dụng. Việc kiểm soát và xét duyệt được
                diễn ra trong vòng 24h kể từ khi Người cung cấp dịch vụ gửi
                thông tin. Ban quản lý ứng dụng chỉ cho phép các tin đăng đạt
                tiêu chuẩn theo quy định được hiển thị.
              </li>

              <li>
                Bước 3: Nếu các hình ảnh, nội dung, thông tin dịch vụ không vi
                phạm các quy định chung, không vi phạm từ khóa, tiêu chí đăng
                thông tin dịch vụ của TripC và không vi phạm các quy định của
                pháp luật, bộ phận quản lý nội dung của TripC sẽ chấp nhận duyệt
                và xuất thông tin dịch vụ. Khi đó, dịch vụ sẽ được đăng tải
                chính thức lên ứng dụng TripC.
              </li>

              <li>
                Nếu các nội dung và thông tin về dịch vụ vi phạm các quy định
                chung của TripC và/hoặc vi phạm các quy định của pháp luật, Ban
                quản lý sẽ yêu cầu Người cung cấp dịch vụ chỉnh sửa lại các nội
                dung thông tin đó và gửi cho Ban quản lý để kiểm duyệt lại.
              </li>

              <li>
                Nếu sau khi gửi lại mà thông tin vẫn vi phạm các quy định chung
                của TripC và/hoặc vi phạm các quy định của pháp luật, Ban quản
                lý ứng dụng TripC có toàn quyền loại bỏ nội dung đó và không
                đăng tải lên ứng dụng, đồng thời gửi thông báo tới Người cung
                cấp dịch vụ.
              </li>

              <li>
                Ban quản lý ứng dụng TripC giữ toàn quyền quyết định về việc lưu
                giữ hay loại bỏ tin đã đăng trên sàn giao dịch TMĐT này mà không
                cần báo trước.
              </li>

              <li className="font-medium">
                - Quy trình phối hợp với các chủ thể quyền sở hữu trí tuệ rà
                soát và gỡ bỏ các sản phẩm xâm phạm quyền sở hữu trí tuệ trên
                Ứng dụng:
              </li>
            </ul>
          </ul>

          <ul>
            <li>
              Ứng dụng cung cấp dịch vụ thương mại điện tử TripC luôn đề cao
              quyền sở hữu trí tuệ của mọi cá nhân, tổ chức, doanh nghiệp. Do
              vậy, khi nhận thấy bất kỳ thông tin dịch vụ nào có dấu hiệu xâm
              phạm quyền sở hữu trí tuệ, chủ thể quyền sở hữu trí tuệ có thể gửi
              yêu cầu và thực hiện theo các thủ tục cần thiết dưới đây để bảo vệ
              các quyền sở hữu trí tuệ của mình trên Ứng dụng TripC:
            </li>

            <li className="italic">
              (1) Các đối tượng bảo hộ quyền sở hữu trí tuệ được chấp thuận xử
              lý trên Ứng dụng TripC:
            </li>

            <li>
              - TripC chỉ tiếp nhận và xử lý các yêu cầu bảo vệ quyền sở hữu trí
              tuệ của các chủ thể liên quan đến tin đăng bị nghi ngờ xâm phạm:
              Quyền tác giá và quyền liên quan; một số đối tượng quyền sở hữu
              công nghiệp gồm: sáng chế, kiểu dáng công nghiệp, nhãn hiệu và tên
              thương mại theo quy định của Luật sở hữu trí tuệ hiện hành.
            </li>

            <li className="italic">
              (2) Các hành vi bị coi là xâm phạm quyền sở hữu trí tuệ trên Ứng
              dụng TripC:
            </li>

            <li>
              - Đăng dịch vụ lưu trú phòng, khách sạn.... có chứa thông tin,
              hình ảnh, nội dung sao chép (toàn bộ hoặc một phần) tác phẩm đang
              được bảo hộ của Chủ thể quyền mà không có sự cho phép của Chủ thể
              quyền hoặc người được cấp quyền sử dụng hợp pháp tác phẩm tại Việt
              Nam, ví dụ như sử dụng nội dung mô tả thông tin dịch vụ, hình ảnh
              minh họa, video minh họa sao chép hình ảnh, video của chủ thể
              quyền.
            </li>

            <li>
              - Đặt tên Shop, hình ảnh đại diện của Shop có chứa thông tin, hình
              ảnh sao chép (toàn bộ hoặc một phần) tác phẩm đang được bảo hộ của
              Chủ thể quyền mà không có sự cho phép của Chủ thể quyền
            </li>

            <li>
              - Nội dung đăng bán có chứa thông tin, hình ảnh, video trùng hoặc
              tương tự đến mức gây nhầm lẫn, không có sự khác biệt đáng kể với
              các đối tượng quyền sở hữu công nghiệp (gồm: nhãn hiệu, sáng chế,
              tên thương mại, kiểu dáng công nghiệp) của Chủ thể quyền hoặc
              người được cấp quyền sử dụng các đối tượng này mà không có sự cho
              phép của họ.- Nội dung đăng bán có chứa thông tin, hình ảnh, video
              trùng hoặc tương tự đến mức gây nhầm lẫn, không có sự khác biệt
              đáng kể với các đối tượng quyền sở hữu công nghiệp (gồm: nhãn
              hiệu, sáng chế, tên thương mại, kiểu dáng công nghiệp) của Chủ thể
              quyền hoặc người được cấp quyền sử dụng các đối tượng này mà không
              có sự cho phép của họ.
            </li>

            <li className="italic">
              (3) Tư cách chủ thể có quyền khiếu nại yêu cầu xử lý việc xâm phạm
              quyền sở hữu trí tuệ trên Ứng dụng TripC:
            </li>

            <li>
              - Chủ sở hữu hợp pháp quyền sở hữu trí tuệ theo quy định của Luật
              Sở hữu trí tuệ hiện hành;
            </li>

            <li>
              - Người được chủ sở hữu hợp pháp quyền sở hữu trí tuệ cấp quyền sử
              dụng theo quy định của Luật sở hữu trí tuệ;
            </li>

            <li>
              - Người đại diện hợp pháp của hai chủ thể nêu trên theo đúng quy
              định về cơ chế đại diện (theo pháp luật hoặc theo ủy quyền).
            </li>

            <li className="italic">
              (4) Tài liệu chứng minh được coi là hợp lệ khi chủ thể quyền gửi
              khiếu nại về hành vi bị nghi ngờ xâm phạm quyền sở hữu trí tuệ:
            </li>

            <li>
              - Văn bản ủy quyền (trong trường hợp người khiếu nại không phải là
              Chủ sở hữu).
            </li>

            <li>
              - Giấy chứng nhận đăng ký bảo hộ nhãn hiệu (đối với khiếu nại về
              hành vi xâm phạm nhãn hiệu); hoặc Giấy chứng nhận đăng ký bảo hộ
              kiểu dáng công nghiệp/ sáng chế (đối với khiếu nại về hành vi xâm
              phạm kiểu dáng công nghiệp/ sáng chế); hoặc Giấy chứng nhận đăng
              ký quyền tác giả, quyền liên quan (đối với hành vi xâm phạm bản
              quyền).
            </li>

            <li>- Đường link thông tin dịch vụ khiếu nại.</li>

            <li>- Tên tài khoản Người cung cấp dịch vụ bị khiếu nại.</li>

            <li>
              - Bản sao giấy chứng nhận đăng ký doanh nghiệp (trường hợp bên
              khiếu nại là Tổ chức) hoặc bản chụp hai mặt chứng minh nhân dân/
              căn cước công dân (trường hợp bên khiếu nại là cá nhân).
            </li>

            <li>
              - Bằng chứng chứng minh khác về hành vi vi phạm, gồm: Kết quả giám
              định sở hữu trí tuệ do cơ quan, tổ chức đủ điều kiện cấp và/hoặc
              hình ảnh, tài liệu phân tích.
            </li>

            <li className="italic">
              (5) Quy trình tiếp nhận và xử lý khiếu nại về hành vi bị nghi ngờ
              xâm phạm quyền sở hữu trí trệ trên Ứng dụng TripC:
            </li>

            <li>
              - Bước 1: Chủ thể có quyền khiếu nại gửi yêu cầu và tài liệu chứng
              minh quy định tại mục (4) về cho Ban quản trị Ứng dụng TripC qua
              email: Cs@tripc.ai.
            </li>

            <li>
              - Bước 2: Sau khi nhận được phản hồi của người dùng về vấn đề vi
              phạm, chúng tôi, trong vòng 03 giờ làm việc, sẽ liên hệ lại với
              người dùng để xác minh thông tin
            </li>

            <li>
              - Bước 3: Trong thời hạn 07 – 10 ngày làm việc kể từ ngày nhận
              được yêu cầu của Chủ thể quyền và nếu Chủ thể quyền cung cấp đầy
              đủ thông tin, tài liệu chứng minh hành vi xâm phạm quyền của Bên
              bị khiếu nại, chúng tôi sẽ thực hiện các biện pháp xử lý hành vi
              vi phạm của Bên bị khiếu nại. Cụ thể:
            </li>

            <li>
              + Thông báo trước với Người cung cấp dịch vụ (bên có hành vi vi
              phạm) về việc gỡ bỏ tin đăng liên quan.
            </li>

            <li>
              + Tài khoản của Người cung cấp dịch vụ cũng sẽ bị cảnh báo lần 1,
              bị khóa tạm thời trong vòng 15 ngày và Người cung cấp dịch vụ phải
              thực hiện việc bồi thường thiệt hại cho CÔNG TY CỔ PHẦN ALLY AI
              cũng như chủ thể quyền sở hữu trí tuệ (nếu hành vi xâm phạm quyền
              sở hữu trí tuệ của Người cung cấp dịch vụ gây ra thiệt hại).{" "}
            </li>

            <li>
              + Nếu hành vi xâm phạm quyền sở hữu trí tuệ tái diễn nhiều lần,
              tài khoản của Người cung cấp dịch vụ trên TripC sẽ bị khóa vĩnh
              viễn.
            </li>
          </ul>

          <ul>
            <li className="font-medium italic">Lưu ý: </li>

            <li className="italic">
              - Trong trường hợp Chủ thể quyền chưa cung cấp đầy đủ tài liệu như
              được hướng dẫn tại mục (4), trong thời hạn 24 giờ làm việc kể từ
              khi nhận được yêu cầu của Chủ thể quyền, ban quản trị Ứng dụng
              TripC sẽ thông báo và yêu cầu Chủ thể quyền bổ sung thông tin, tài
              liệu như đã hướng dẫn. Trong trường hợp bổ sung tài liệu không đầy
              đủ hoặc bổ sung không đúng theo hướng dẫn, Ứng dụng TripC có quyền
              tạm đình chỉ hoặc chấm dứt việc xử lý khiếu nại của chủ thể yêu
              cầu.
            </li>

            <li className="italic">
              - Trường hợp vụ việc có tính chất phức tạp, mức độ thiệt hại do
              hành vi xâm phạm quyền sở hữu trí tuệ là đáng kể, Ứng dụng TripC
              khuyến nghị chủ thể quyền đưa vụ tranh chấp ra giải quyết tại cơ
              quan có thẩm quyền để đám bảo tối đa quyền lời chính đáng của họ.
              Trong trường hợp đó, Ứng dụng TripC sẽ là bên trung gian, hỗ trợ
              cung cấp thông tin và tài liệu theo yêu cầu của cơ quan chức năng
              nhằm phục vụ cho công tác thẩm định và xử lý theo đúng quy định
              pháp luật.
            </li>

            <ul>
              <li className="font-medium italic"> Chế tài </li>
              <li>
                Trường hợp các tin đăng của Người cung cấp dịch vụ vi phạm các
                quy định về kiểm soát thông tin dịch vụ, Ban quản lý của TripC
                sẽ có chế tài xử lý như sau:
              </li>

              <li>
                - Trường hợp các thông tin dịch vụ không phù hợp với chuyên mục
                quy định, Ban quản lý sẽ gửi thông báo cho Người cung cấp dịch
                vụ hoặc xóa tin đăng hoặc chuyển thông tin dịch vụ đó sang
                chuyên mục khác phù hợp theo quy định của ứng dụng cung cấp dịch
                vụ TMĐT TripC.
              </li>

              <li>
                - Người cung cấp dịch vụ vi phạm các quy định về danh mục các
                thông tin dịch vụ bị cấm kinh doanh hoặc/và cấm quảng cáo trên
                TripC sẽ bị xóa tài khoản Người cung cấp dịch vụ và không được
                đăng tin dịch vụ lưu trú trên TripC, đồng thời phải tự chịu
                trách nhiệm pháp lý đối với các hành vi vi phạm pháp luật Việt
                Nam hiện hành.
              </li>

              <li>
                - Trường hợp Người cung cấp dịch vụ vi phạm quy chế hoạt động
                của ứng dụng cung cấp dịch vụ TMĐT TripC dẫn đến thiệt hại cho
                ứng dụng cung cấp dịch vụ TMĐT hoặc CÔNG TY CỔ PHẦN ALLY AI VIỆT
                NAM, Ban quản lý ứng dụng cung cấp dịch vụ TMĐT sẽ yêu cầu Người
                cung cấp dịch vụ bồi thường các thiệt hại theo các giấy tờ, căn
                cứ chứng minh hợp lệ.
              </li>
            </ul>
          </ul>
        </ul>

        <ul className="mt-4">
          <li className="font-medium" id="permission-responsibility-app">
            IX. Quyền và trách nhiệm của Ban quản lý Ứng dụng TripC
          </li>

          <ul>
            <li className="font-medium" id="permission-app">
              1. Quyền của Ban quản lý Ứng dụng TripC
            </li>
            <li>
              - Ứng dụng cung cấp dịch vụ TMĐT TripC sẽ tiến hành cung cấp các
              dịch vụ cho những thành viên tham gia sau khi đã hoàn thành các
              thủ tục và các điều kiện bắt buộc mà Ứng dụng cung cấp dịch vụ
              TMĐT TripC nêu ra.
            </li>
            <li>
              - Lưu trữ thông tin đăng ký của thành viên và thường xuyên cập
              nhật những thông tin thay đổi, bổ sung có liên quan.
            </li>
            <li>
              - Ứng dụng cung cấp dịch vụ TMĐT TripC sẽ tiến hành xây dựng các
              chính sách dịch vụ áp dụng cho từng đối tượng trên Ứng dụng. Các
              chính sách này sẽ được công bố trên Ứng dụng cung cấp dịch vụ TMĐT
              TripC.
            </li>

            <li>
              - Trong trường hợp có cơ sở để chứng minh thành viên cung cấp
              thông tin cho Ứng dụng cung cấp dịch vụ TMĐT TripC không chính
              xác, sai lệch, không đầy đủ hoặc vi phạm pháp luật hay thuần phong
              mỹ tục Việt Nam thì Ứng dụng cung cấp dịch vụ TMĐT TripC có quyền
              từ chối, tạm ngừng hoặc chấm dứt quyền sử dụng dịch vụ của thành
              viên.
            </li>

            <li>
              - Ứng dụng cung cấp dịch vụ TMĐT TripC có thể chấm dứt ngay quyền
              sử dụng dịch vụ của thành viên nếu Ứng dụng cung cấp dịch vụ TMĐT
              TripC phát hiện thành viên bị kết án hoặc đang trong thời gian thụ
              án, trong trường hợp thành viên tiếp tục hoạt động có thể gây cho
              Ứng dụng cung cấp dịch vụ TMĐT TripC trách nhiệm pháp lý, có những
              hoạt động lừa đảo, giả mạo, gây rối loạn thị trường, gây mất đoàn
              kết đối với các thành viên khác của Ứng dụng cung cấp dịch vụ TMĐT
              TripC, hoạt động vi phạm pháp luật hiện hành của Việt Nam.
            </li>

            <li>
              - Ứng dụng cung cấp dịch vụ TMĐT TripC có quyền gỡ sản phẩm, chỉnh
              sửa hoặc xóa nội dung thông tin về các sản phẩm đó nếu Ứng dụng
              cung cấp dịch vụ TMĐT TripC phát hiện sản phẩm thuộc danh mục
              cấm/hạn chế kinh doanh hoặc thành viên không xuất trình được giấy
              phép kinh doanh đối với các sản phẩm kinh doanh có điều kiện.
            </li>
            <li>
              - Trong trường hợp chấm dứt quyền thành viên và quyền sử dụng dịch
              vụ trên Ứng dụng TripC thì tất cả các quyền của thành viên được
              cấp sẽ mặc nhiên hết giá trị và bị chấm dứt, thông tin lưu trú đã
              đăng tải của thành viên cũng sẽ bị gỡ xuống.
            </li>

            <li>
              - Ứng dụng cung cấp dịch vụ TMĐT TripC giữ bản quyền sử dụng dịch
              vụ và các nội dung trên Ứng dụng cung cấp dịch vụ TMĐT TripC theo
              các quy định pháp luật về bảo hộ sở hữu trí tuệ tại Việt Nam. Tất
              cả các biểu tượng, nội dung theo các ngôn ngữ khác nhau đều thuộc
              quyền sở hữu của Ứng dụng cung cấp dịch vụ TMĐT TripC. Nghiêm cấm
              mọi hành vi sao chép, sử dụng và phổ biến bất hợp pháp các quyền
              sở hữu trên.
            </li>
            <li>
              - Ứng dụng cung cấp dịch vụ TMĐT TripC giữ quyền được thay đổi
              bảng giá dịch vụ và phương thức thanh toán trong thời gian cung
              cấp dịch vụ cho thành viên (đối với Người cung cấp dịch vụ) theo
              nhu cầu và điều kiện khả năng của Ứng dụng cung cấp dịch vụ TMĐT
              TripC và sẽ báo trước cho các thành viên đó thời hạn là một (01)
              tháng.
            </li>
          </ul>

          <ul>
            <li className="font-medium" id="responsibility-app">
              2. Nghĩa vụ và trách nhiệm của Ban quản lý Ứng dụng TripC
            </li>

            <li>
              - Thông báo với Bộ Công Thương về việc thiết lập Ứng dụng thương
              mại điện tử đăng tin lưu trú.
            </li>

            <li>
              - Thực hiện kiểm duyệt và đăng bài lưu trú cho Người cung cấp dịch
              vụ lên sàn TMDT.
            </li>

            <li>
              - Tuân thủ các quy định về bảo vệ thông tin cá nhân của khách
              hàng.
            </li>

            <li>
              - Đảm bảo an toàn, bảo mật giao dịch thanh toán của Người sử dụng
              dịch vụ, xử lý khiếu nại và đền bù thiệt hại trong trường hợp
              thông tin thanh toán của Người sử dụng dịch vụ qua Ứng dụng thương
              mại điện tử bị thay đổi, xóa, hủy, sao chép, tiết lộ, di chuyển
              trái phép hoặc bị chiếm đoạt gây thiệt hại cho Người sử dụng dịch
              vụ.
            </li>

            <li>
              - Cung cấp thông tin về tình hình kinh doanh của mình khi có yêu
              cầu của cơ quan nhà nước có thẩm quyền để phục vụ hoạt động thống
              kê thương mại điện tử, hoạt động thanh tra, kiểm tra và xử lý vi
              phạm trong thương mại điện tử.
            </li>

            <li>
              - Lưu trữ thông tin về các giao dịch được thực hiện qua Ứng dụng
              theo quy định của pháp luật về kế toán; thực hiện đầy đủ nghĩa vụ
              thuế theo quy định của pháp luật.
            </li>

            <li>
              - Đăng ký thiết lập Ứng dụng cung cấp dịch vụ khuyến mại trực
              tuyến với cơ quan nhà nước có thẩm quyền.{" "}
            </li>

            <li>
              - Tuân thủ các quy định của Luật thương mại và các quy định pháp
              luật có liên quan về hoạt động khuyến mại.
            </li>

            <li>
              - Tuân thủ các quy định về bảo vệ thông tin cá nhân của người
              dùng.
            </li>

            <li>
              - Xây dựng và công bố trên Ứng dụng cơ chế tiếp nhận, giải quyết
              các khiếu nại của khách hàng về thông tin Phòng khách sạn.
            </li>

            <li>
              - Chịu trách nhiệm của bên thứ ba trong việc cung cấp thông tin
              dịch vụ cho Người sử dụng dịch vụ theo quy định của Luật Phòng
              khách sạn.
            </li>

            <li>
              - Đăng ký Ứng dụng cung cấp dịch vụ thương mại điện tử với cơ quan
              nhà nước có thẩm quyền.
            </li>

            <li>
              - Xây dựng và công bố công khai Quy chế hoạt động, Quy định, Hướng
              dẫn các quy trình giao dịch cho Thành viên; theo dõi và bảo đảm
              việc thực hiện quy chế đó trên Ứng dụng cung cấp dịch vụ TMĐT
              TripC.
            </li>

            <li>
              - Công bố đầy đủ các thông tin về chủ sở hữu Ứng dụng lên trang
              chủ Ứng dụng theo đúng quy định pháp luật. Thông tin của CÔNG TY
              CỔ PHẦN ALLY AI được thể hiện trên trang chủ Ứng dụng như sau:
              <ul>
                <li>
                  <span className="italic">Tên đơn vị:</span> CÔNG TY CỔ PHẦN
                  ALLY AI
                </li>
                <li>
                  <span className="italic">Mã số thuế:</span> 0402251123
                </li>
                <li>
                  <span className="italic">Trụ sở chính: </span> 153 Đống Đa,
                  Phường Thạch Thang, Quận Hải Châu, Thành phố Đà Nẵng
                </li>
                <li>
                  <span className="italic">Số điện thoại:</span> 0935479122
                </li>
                <li>
                  <span className="italic">Email:</span> cs@tripc.ai
                </li>
              </ul>
              <ul>
                <li>
                  - Hỗ trợ các thành viên để sử dụng được các công cụ, các tính
                  năng phục vụ cho việc tiến hành giao dịch và sử dụng các dịch
                  vụ tiện ích trên Ứng dụng cung cấp dịch vụ TMĐT TripC.
                </li>
                <li>
                  - Tiếp nhận góp ý của thành viên cho Ứng dụng cung cấp dịch vụ
                  TMĐT TripC trong quá trình hoạt động.
                </li>
                <li>
                  - Ứng dụng cung cấp dịch vụ TMĐT TripC chịu trách nhiệm xây
                  dựng Ứng dụng bao gồm một số công việc chính như: nghiên cứu,
                  thiết kế, mua sắm các thiết bị phần cứng và phần mềm, kết nối
                  Internet, xây dựng chính sách phục vụ cho hoạt động Ứng dụng
                  cung cấp dịch vụ TMĐT TripC trong điều kiện và phạm vi cho
                  phép.
                </li>
                <li>
                  - Ứng dụng cung cấp dịch vụ TMĐT TripC có cơ chế kiểm tra,
                  giám sát để đảm bảo việc cung cấp thông tin của thành viên
                  trên Ứng dụng cung cấp dịch vụ TMĐT được thực hiện chính xác,
                  đầy đủ.
                </li>
                <li>
                  - Ứng dụng sẽ công bố công khai cơ chế giải quyết các tranh
                  chấp phát sinh trong quá trình giao dịch trên Ứng dụng cung
                  cấp dịch vụ TMĐT TripC. Khi Người sử dụng dịch vụ trên Ứng
                  dụng cung cấp dịch vụ TMĐT phát sinh mâu thuẫn với Người cung
                  cấp dịch vụ hoặc bị tổn hại lợi ích hợp pháp, TripC phải cung
                  cấp cho Người sử dụng dịch vụ thông tin về Người cung cấp dịch
                  vụ, tích cực hỗ trợ Người sử dụng dịch vụ bảo vệ quyền và lợi
                  ích hợp pháp của mình.
                </li>

                <li>
                  - Ban quản lý sẽ cố gắng đến mức cao nhất trong phạm vi và
                  điều kiện có thể để duy trì hoạt động bình thường của Ứng dụng
                  cung cấp dịch vụ TMĐT TripC và khắc phục các sự cố như: sự cố
                  kỹ thuật về máy móc, lỗi phần mềm, hệ thống đường truyền
                  internet, nhân sự, các biến động xã hội, thiên tai, mất điện,
                  các quyết định của cơ quan nhà nước hay một tổ chức liên quan
                  thứ ba. Tuy nhiên, nếu những sự cố trên xảy ra nằm ngoài khả
                  năng kiểm soát, là những trường hợp bất khả kháng mà gây thiệt
                  hại cho thành viên thì Ứng dụng cung cấp dịch vụ TMĐT TripC
                  không phải chịu trách nhiệm liên đới.
                </li>
                <li>
                  - Ban quản lý Ứng dụng cung cấp dịch vụ TMĐT TripC có trách
                  nhiệm xử lý kịp thời khi phát hiện hoặc nhận được phản ánh về
                  hành vi kinh doanh vi phạm pháp luật trên Ứng dụng cung cấp
                  dịch vụ thương mại điện tử như sau: a) Ngăn chặn và loại bỏ
                  khỏi Ứng dụng những thông tin mua đăng tin lưu trú hóa, cung
                  ứng dịch vụ thuộc danh mục hàng hóa, dịch vụ cấm kinh doanh,
                  thuộc ngành, nghề cấm đầu tư kinh doanh theo quy định của pháp
                  luật; b) Gỡ bỏ thông tin về hàng hóa, dịch vụ vi phạm pháp
                  luật trong vòng tối đa là 24 giờ kể từ khi nhận được yêu cầu
                  của cơ quan quản lý nhà nước có thẩm quyền; c) Phối hợp với
                  các chủ thể quyền sở hữu trí tuệ rà soát và gỡ bỏ các sản phẩm
                  xâm phạm quyền sở hữu trí tuệ theo quy trình, thủ tục công bố
                  tại Quy chế hoạt động của Ứng dụng cung cấp dịch vụ thương mại
                  điện tử; d) Cảnh cáo hoặc từ chối cung cấp dịch vụ có thời hạn
                  hoặc vĩnh viễn đối với những cá nhân, thương nhân, tổ chức có
                  hành vi kinh doanh vi phạm pháp luật; đ) Các biện pháp khác
                  theo Quy chế hoạt động của Ứng dụng cung cấp dịch vụ thương
                  mại điện tử TripC.
                </li>
                <li>
                  - Ứng dụng cung cấp dịch vụ TMĐT TripC có trách nhiệm hỗ trợ
                  cơ quan quản lý nhà nước điều tra các hành vi kinh doanh vi
                  phạm pháp luật, và giải quyết tranh chấp, khiếu nại: Cung cấp
                  thông tin về đối tượng có dấu hiệu, hành vi vi phạm pháp luật
                  trên Ứng dụng cung cấp dịch vụ thương mại điện tử cho cơ quan
                  quản lý nhà nước có thẩm quyền khi phát hiện hoặc nhận được
                  các thông tin nêu trên; Thường xuyên cập nhật từ khóa theo
                  khuyến cáo từ cơ quan quản lý nhà nước có thẩm quyền và lọc
                  thông tin theo từ khóa trước khi thông tin về hàng hóa, dịch
                  vụ hiển thị trên Ứng dụng; Tiếp nhận, phản hồi thông tin để
                  giải quyết khiếu nại, phản ánh và tranh chấp liên quan đến Ứng
                  dụng cung cấp dịch vụ TMĐT tại Cổng thông tin Quản lý hoạt
                  động thương mại điện tử của Bộ Công Thương tại địa chỉ
                  online.gov.vn.
                </li>
                <li>
                  - Ứng dụng cung cấp dịch vụ TMĐT TripC có trách nhiệm yêu cầu
                  Người cung cấp dịch vụ phải cung cấp đầy đủ các thông tin,
                  giấy tờ, giấy chứng nhận liên quan chứng minh đủ điều kiện
                  kinh doanh hàng hóa thuộc danh mục kinh doanh có điều kiện khi
                  đăng ký sử dụng dịch vụ Ứng dụng cung cấp dịch vụ TMĐT của
                  TripC theo đúng quy định pháp luật Việt Nam.
                </li>
                <li>
                  - Lưu trữ thông tin đăng ký của các thương nhân, tổ chức, cá
                  nhân tham gia Ứng dụng cung cấp dịch vụ TMĐT TripC và thường
                  xuyên cập nhật những thông tin thay đổi, bổ sung có liên quan.
                </li>
                <li>
                  - Thiết lập cơ chế cho phép thương nhân, tổ chức, cá nhân tham
                  gia Ứng dụng cung cấp dịch vụ TMĐT TripC thực hiện được quy
                  trình giao kết hợp đồng trong quá trình đặt hàng trực tuyến
                  trên Ứng dụng.
                </li>
                <li>
                  - Áp dụng các biện pháp cần thiết để đảm bảo an toàn thông tin
                  liên quan đến bí mật kinh doanh của thương nhân, tổ chức, cá
                  nhân và thông tin cá nhân của người tiêu dùng.
                </li>
                <li></li>
                <li></li>
              </ul>
            </li>
          </ul>
        </ul>
        <ul className="mt-4">
          <li className="font-medium" id="permission-responsibility-app-supplier">
            X. Quyền và trách nhiệm của Người cung cấp dịch vụ trên Ứng dụng
            TripC
          </li>

          <ul>
            <li className="font-medium" id="permission-app-supplier">
              1. Quyền của Người cung cấp dịch vụ trên Ứng dụng TripC
            </li>
            <li>
              - Khi đăng ký trở thành Người cung cấp dịch vụ của TripC và được
              TripC chấp thuận, Người cung cấp dịch vụ sẽ được TripC hỗ trợ đăng
              tải thông tin, đưa sản phẩm/dịch vụ lên TripC để tiếp cận khách
              hàng tiềm năng, thông báo kịp thời cho Người cung cấp dịch vụ các
              đơn hàng phát sinh trên TripC để người cung cấp dịch vụ xúc tiến
              cung cấp dịch vụ cho khách hàng.
            </li>
            <li>
              - Người cung cấp dịch vụ có quyền đóng góp ý kiến cho TripC trong
              quá trình hoạt động. Các kiến nghị được gửi bằng thư điện tử đến
              cho TripC.
            </li>
            <li>
              Người cung cấp dịch vụ còn có các quyền được nêu trong các thỏa
              thuận hợp tác, các hợp đồng liên quan, trong Đề án này và cũng như
              các chính sách khác của TripC đã được đăng tải trên Ứng dụng TripC
              của Công ty, cũng như theo quy định pháp luật áp dụng
            </li>
          </ul>

          <ul>
            <li className="font-medium" id="responsibility-app-supplier">
              2. Nghĩa vụ và trách nhiệm của Người cung cấp dịch vụ trên Ứng
              dụng TripC
            </li>

            <li>
              - Người cung cấp dịch vụ có trách nhiệm cung cấp đầy đủ, chính xác
              các thông tin cập nhật mới nhất được yêu cầu khi khởi tạo tài
              khoản, hoặc trong quá trình sử dụng dịch vụ, bao gồm các thông tin
              về Người cung cấp dịch vụ cũng như các thông tin về các dịch vụ mà
              Người cung cấp dịch vụ cung cấp cho Người dùng, bao gồm nhưng
              không giới hạn bởi các thông tin về dịch vụ, giá cả, điều kiện
              giao dịch, phương thức thanh toán và các thông tin giao dịch khác.
            </li>
            <li>
              - Người cung cấp dịch vụ có trách nhiệm cung cấp và báo cáo các
              thông tin liên quan khi có yêu cầu của các cơ quan nhà nước phục
              vụ cho các hoạt động thống kê thương mại điện tử. Người cung cấp
              dịch vụ hoàn toàn chịu trách nhiệm về tính chính xác, trung thực
              của các thông tin được yêu cầu này. Người cung cấp dịch vụ phải
              nhanh chóng thông báo, cập nhật các thông tin liên quan.
            </li>
            <li>
              - Người cung cấp dịch vụ có trách nhiệm cung cấp các thông tin,
              tài liệu về dịch vụ của mình cũng như về giao dịch liên quan giữa
              Người cung cấp dịch vụ và Người dùng và nghĩa vụ hợp tác, tuân thủ
              các yêu cầu, quy định trong chính sách hỗ trợ giải quyết khiếu nại
              và tranh chấp và phối hợp với TripC trong quá trình giải quyết các
              tranh chấp, khiếu nại, khiếu kiện phát sinh giữa Người cung cấp
              dịch vụ và Người dùng. Người cung cấp dịch vụ có nghĩa vụ và trách
              nhiệm bồi thường các thiệt hại gây ra bởi Người cung cấp dịch vụ
              và/hoặc nhân viên của mình.
            </li>

            <li>
              - Người cung cấp dịch vụ có trách nhiệm và nghĩa vụ tuân thủ pháp
              luật về thanh toán, quảng cáo, khuyến mại, bảo vệ quyền sở hữu trí
              tuệ, bảo vệ quyền lợi người tiêu dùng và các quy định của pháp
              luật có liên quan khác khi cung ứng dịch vụ trên Ứng dụng TripC.
            </li>

            <li>
              - Người cung cấp dịch vụ có trách nhiệm và nghĩa vụ tuân thủ các
              quy định của Đề án này, Điều Khoản Sử Dụng cũng như các chính
              sách, quy định, quy chế, quy trình và hướng dẫn được TripC viện
              dẫn trong Quy Chế hoạt động hoặc được TripC công bố hoặc áp dụng
              vào từng thời điểm. Người cung cấp dịch vụ cam kết, đồng ý không
              sử dụng dịch vụ cũng như Ứng dụng TripC vào những mục đích bất hợp
              pháp, không hợp lý, lừa đảo, đe dọa, thăm dò thông tin bất hợp
              pháp, phá hoại, tạo ra và phát tán virus gây hư hại hệ thống, cấu
              hình, truyền tải thông tin của Ứng dụng TripC hay sử dụng dịch vụ
              của mình vào mục đích đầu cơ, lũng đoạn thị trường, kể cả phục vụ
              cho việc phán đoán nhu cầu thị trường. Trong trường hợp vi phạm
              thì Người cung cấp dịch vụ phải hoàn toàn chịu trách nhiệm về các
              hành vi của mình trước pháp luật.
            </li>

            <li>
              - Người cung cấp dịch vụ phải tự chịu trách nhiệm về nội dung,
              hình ảnh của thông tin doanh nghiệp và các thông tin khác cũng như
              toàn bộ quá trình giao dịch giữa các Người cung cấp dịch vụ và
              Người dùng trên Ứng dụng của TripC. Người cung cấp dịch vụ cam kết
              cung cấp các dịch vụ của mình cho Người dùng đúng với nội dung mà
              Người cung cấp dịch vụ công bố hoặc cam kết trên Ứng dụng TripC.
            </li>

            <li>
              - Người cung cấp dịch vụ phải tự chịu trách nhiệm về bảo mật thông
              tin, lưu giữ và mọi hoạt động sử dụng dịch vụ dưới tên đăng ký,
              mật khẩu và hộp thư điện tử của mình. Người cung cấp dịch vụ có
              trách nhiệm thông báo kịp thời cho TripC về những hành vi sử dụng
              trái phép, lạm dụng, vi phạm bảo mật, lưu giữ tên đăng ký và mật
              khẩu của mình để hai bên cùng hợp tác xử lý. TripC sẽ không chịu
              trách nhiệm về các thiệt hại gây ra do sử dụng trái phép, lạm
              dụng, vi phạm bảo mật, lưu giữ tên đăng ký và mật khẩu của Người
              cung cấp dịch vụ mà không phải do lỗi của TripC. Các cam kết bảo
              mật thông tin của TripC theo chính sách bảo mật không thay thế,
              hay miễn trừ, các nghĩa vụ và trách nhiệm bảo mật thông tin của
              Người cung cấp dịch vụ.
            </li>

            <li>
              - Người cung cấp dịch vụ tự chịu trách nhiệm và cam kết tiến hành
              và thực hiện các biện pháp cần thiết để bảo mật thông tin Người
              dùng theo quy định của pháp luật. Người cung cấp dịch vụ cam kết
              sẽ đảm bảo các nhân viên của mình tuân thủ nghĩa vụ bảo mật này.{" "}
            </li>

            <li>
              Người cung cấp dịch vụ hoàn toàn chịu trách nhiệm và phải thực
              hiện đầy đủ và đúng hạn các nghĩa vụ thuế và tài chính của mình
              theo quy định của pháp luật áp dụng.
            </li>

            <li>
              - Người cung cấp dịch vụ hoàn toàn chịu trách nhiệm và phải thực
              hiện đầy đủ và đúng hạn các nghĩa vụ thuế và tài chính của mình
              theo quy định của pháp luật áp dụng, cam kết sẽ đảm bảo các Người
              cung cấp dịch vụ hoàn toàn chịu trách nhiác không đưn toàn chịu
              trách nhiệm vàch không đưn toàn chịu trách nhiệm và phải thực hiện
              đầy đủ và đúng hạn các nghĩa vụ.
            </li>

            <li>
              - Người cung cấp dịch vụ còn có các nghĩa vụ khác nêu trong các
              thỏa thuận hợp tác, các hợp đồng liên quan, trong Đề án này và
              cũng như các chính sách khác của TripC đã được đăng tải trên Ứng
              dụng TripC của Công ty, cũng như theo quy định pháp luật áp dụng.
            </li>

            <li>
              - Có trách nhiệm thông báo kịp thời cho Ứng dụng cung cấp dịch vụ
              TMĐT TripC về những hành vi sử dụng trái phép, lạm dụng, vi phạm
              bảo mật, lưu giữ thông tin cá nhân của mình để hai bên cùng hợp
              tác xử lý.
            </li>
            <li>
              - Phối hợp với TripC trong việc giải quyết những vấn đề tranh chấp
              với Người sử dụng dịch vụ, có trách nhiệm cung cấp thông tin về
              giao dịch để hỗ trợ Ứng dụng cung cấp dịch vụ TMĐT TripC trong
              việc các giải quyết tranh chấp đó.
            </li>

            <li>
              - Có trách nhiệm bồi thường thiệt hại cho Người sử dụng dịch vụ
              nếu chứng minh được lỗi đó thuộc về Người cung cấp dịch vụ.
            </li>
            <li>
              - Thanh toán phí đầy đủ và đúng hạn cho Ban quản lý Ứng dụng cung
              cấp dịch vụ TMĐT TripC theo hợp đồng dịch vụ đã ký.
            </li>

            <li>
              - Tuân thủ thực hiện các biện pháp xử phạt (chế tài) của Ban quản
              lý với những hành vi vi phạm của mình.
            </li>
          </ul>
        </ul>

        <ul className="mt-4">
          <li className="font-medium" id="permission-responsibility-app-user">
            XI. Quyền và trách nhiệm của Người sử dụng dịch vụ trên Ứng dụng
            TripC
          </li>

          <ul>
            <li className="font-medium" id="permission-app-user">
              1. Quyền của Người sử dụng dịch vụ trên Ứng dụng cung cấp dịch vụ
              TMĐT TripC
            </li>

            <li>
              - Khi đăng ký trở thành Thành viên của TripC và được TripC chấp
              thuận, Người dùng sẽ được khởi tạo tài khoản để sử dụng dịch vụ
              trên Ứng dụng TripC và tham gia tận hưởng các ưu đãi nằm trong hệ
              thống của TripC. Người dùng sẽ được cấp một tên đăng ký và mật
              khẩu riêng để được vào sử dụng dịch vụ, quản lý tài khoản và các
              thông tin lịch sử sử dụng, thông tin và hồ sơ cá nhân của mình
              trong Ứng dụng của TripC.
            </li>

            <li>
              - Được hưởng các chính sách ưu đãi do TripC hay các Đối tác TripC
              cung cấp trên Ứng dụng TripC. Các chính sách ưu đãi này sẽ được
              TripC giải quyết (nếu có) và sẽ được đăng tải trực tiếp trên Ứng
              dụng TripC hoặc được gửi trực tiếp đến Người dùng vào từng thời
              điểm.
            </li>

            <li>
              - Có quyền đóng góp ý kiến cho TripC trong quá trình hoạt động.
              Các ý kiến cần được gửi bằng thư điện tử đến cho TripC hoặc thông
              qua Ứng dụng TripC.
            </li>

            <li>
              - Tùy theo quyết định của TripC, Người dùng sẽ được TripC đào tạo,
              hướng dẫn sử dụng các công cụ, các tính năng phục vụ cho việc quản
              lý tài khoản và sử dụng các dịch vụ trên Ứng dụng TripC.{" "}
            </li>

            <li>
              - Có các quyền được nêu trong các thỏa thuận hợp tác, các hợp đồng
              liên quan, trong Đề án này và cũng như các chính sách khác của
              Công ty/ TripC đã được đăng tải trên Ứng dụng TripC, cũng như theo
              quy định pháp luật áp dụng.
            </li>
          </ul>

          <ul>
            <li className="font-medium" id="responsibility-app-user">
              2. Nghĩa vụ và trách nhiệm Người sử dụng dịch vụ trên Ứng dụng
              cung cấp dịch vụ TMĐT TripC
            </li>
            <li>
              - Cung cấp đầy đủ, chính xác các thông tin cập nhật mới nhất được
              yêu cầu khi khởi tạo tài khoản, hoặc trong quá trình sử dụng dịch
              vụ, bao gồm các thông tin về Người dùng cho mục đích xác nhận định
              danh Người dùng, bao gồm nhưng không giới hạn bởi các thông tin về
              tên, tuổi, địa chỉ, số định danh cá nhân cũng như các thông tin
              liên lạc. Bằng cách xác nhận tạo lập tài khoản trên Ứng dụng
              TripC, Người dùng đồng ý và chấp thuận cho TripC được phép sử dụng
              các thông tin này của Người dùng cho và liên quan đến việc quản lý
              tài khoản của Người dùng cũng như việc vận hành và quản lý Ứng
              dụng TripC, việc cung cấp, thực hiện dịch vụ trên nền tảng của
              TripC và các hoạt động và mục đích hợp pháp khác hoặc theo yêu cầu
              của các cơ quan có thẩm quyền. Người dùng hoàn toàn chịu trách
              nhiệm về tính chính xác, trung thực của các thông tin được yêu cầu
              này. TripC không chịu trách nhiệm cũng như không giải quyết mọi
              khiếu nại có liên quan đến quyền lợi của Người dùng nếu các thông
              tin được yêu cầu do Người dùng cung cấp không chính xác, đầy đủ
              hoặc cập nhật. Người dùng phải nhanh chóng thông báo, cập nhật các
              thông tin liên quan.
            </li>
            <li>
              - Chịu trách nhiệm giữ bảo mật các thông tin của mình khi đăng tải
              các thông tin liên quan trên Ứng dụng TripC, bao gồm tất cả nhưng
              không giới hạn bởi các thông tin đăng nhập tài khoản, tên đăng ký,
              mật khẩu, hộp thư điện tử, các hồ sơ cá nhân khác. Bằng cách xác
              nhận tạo lập tài khoản trên Ứng dụng TripC, Người dùng đồng ý và
              chấp thuận cho TripC cũng như các Đối tác liên quan của TripC và
              nhân viên của các Đối tác này, như có liên quan, được quyền truy
              cập và sử dụng các thông tin của Người dùng cho việc cung cấp và
              thực hiện dịch vụ cũng như việc các Đối tác cung cấp các dịch vụ
              liên quan cho Người dùng mà không cần phải có thêm một chấp thuận
              hay đồng ý nào khác. Việc đồng ý sử dụng mã số OTP để nhận thông
              tin từ Ứng dụng TripC là hành vi tự nguyện của Khách hàng và TripC
              không chịu trách nhiệm trong trường hợp khách hàng, vô tình hay cố
              ý, để cá nhân khác truy cập tài khoản của mình hoặc có hành vi sử
              dụng trái phép, lạm dụng, vi phạm bảo mật, lưu giữ tên đăng ký và
              mật khẩu của Người dùng.
            </li>

            <li>
              - Có trách nhiệm thông báo kịp thời cho TripC về những hành vi sử
              dụng trái phép, lạm dụng, vi phạm bảo mật, lưu giữ tên đăng ký và
              mật khẩu của mình để hai bên cùng hợp tác xử lý. TripC sẽ không
              chịu trách nhiệm về các thiệt hại gây ra do sử dụng trái phép, lạm
              dụng, vi phạm bảo mật, lưu giữ tên đăng ký và mật khẩu của Người
              dùng mà không phải do lỗi của TripC.
            </li>

            <li>
              - Cam kết không được thay đổi, chỉnh sửa, sao chép, truyền bá,
              phân phối, cung cấp và tạo những công cụ tương tự như Ứng dụng
              và/hoặc dịch vụ do TripC cung cấp cho một bên thứ ba nếu không
              được sự đồng ý của TripC. Người dùng không được phép chuyển giao,
              chuyển nhượng tài khoản của mình cho bất kỳ bên thứ ba nào mà
              không có sự đồng ý của TripC.
            </li>

            <li>
              - Có trách nhiệm và nghĩa vụ tuân thủ pháp luật áp dụng, các quy
              định của Đề án này, điều khoản sử dụng cũng như các chính sách,
              quy định, quy chế, quy trình và hướng dẫn được TripC viện dẫn
              trong Đề án này hoặc được TripC công bố hoặc áp dụng vào từng thời
              điểm.
            </li>

            <li>
              - Cam kết, đồng ý không sử dụng dịch vụ cũng như Ứng dụng TripC
              vào những mục đích bất hợp pháp, không hợp lý, lừa đảo, đe dọa,
              thăm dò thông tin bất hợp pháp, phá hoại, tạo ra và phát tán virus
              gây hư hại hệ thống, cấu hình, truyền tải thông tin của Ứng dụng
              TripC hay sử dụng dịch vụ liên quan vào mục đích đầu cơ, lũng đoạn
              thị trường tạo những đơn đặt hàng, kể cả phục vụ cho việc phán
              đoán nhu cầu thị trường. Trong trường hợp vi phạm thì Người dùng
              phải hoàn toàn chịu trách nhiệm về các hành vi của mình trước pháp
              luật.
            </li>

            <li>
              - Có trách nhiệm cung cấp các thông tin, tài liệu cá nhân cũng như
              liên quan đến giao dịch giữa Đối tác và Người dùng và nghĩa vụ hợp
              tác, phối hợp với TripC cho và trong quá trình giải quyết các
              tranh chấp, khiếu nại, khiếu kiện phát sinh giữa Đối tác và Người
              dùng. Người dùng cần tuân thủ các yêu cầu và quy định trong chính
              sách hỗ trợ giải quyết khiếu nại và tranh chấp như được quy định
              trong của Quy chế hoạt động. Người dùng có trách nhiệm bồi thường
              các thiệt hại gây bởi hoặc do lỗi của Người dùng trong quá trình
              sử dụng dịch vụ hoặc các hoạt động khác trên Ứng dụng TripC.
            </li>

            <li>
              - Các nghĩa vụ được nêu trong các thỏa thuận hợp tác, các hợp đồng
              liên quan, trong Đề án này và cũng như các chính sách khác của
              Công ty/ TripC đã được đăng tải trên Ứng dụng TripC, cũng như theo
              quy định pháp luật áp dụng.
            </li>
          </ul>
        </ul>

        <ul className="mt-4">
          <li className="font-medium" id="corrective-measure">
            XII. Biện pháp xử lý vi phạm đối với những người không tuân thủ quy
            chế hoạt động của Ứng dụng cung cấp dịch vụ TMĐT TripC
          </li>

          <ul>
            <li>
              Trường hợp có cơ sở và căn cứ chứng minh Người cung cấp dịch vụ
              hoặc Người sử dụng dịch vụ không tuân thủ quy chế hoạt động của
              Ứng dụng cung cấp dịch vụ TMĐT TripC, Ban quản lý Ứng dụng sẽ áp
              dụng một hoặc đồng thời các biện pháp sau:
            </li>
            <li>
              - Từ chối hoặc chấm dứt quyền sử dụng dịch vụ của thành viên đã
              đăng ký trên Ứng dụng cung cấp dịch vụ TMĐT.
            </li>
            <li>
              - TripC có thể chấm dứt quyền thành viên, quyền sử dụng một hoặc
              tất cả các dịch vụ của thành viên và sẽ thông báo cho thành viên
              trong thời hạn ít nhất là một (01) tháng trong trường hợp thành
              viên vi phạm các Quy chế của Ứng dụng TripC hoặc có những hành vi
              ảnh hưởng đến hoạt động kinh doanh trên TripC.
            </li>
            <li>
              - Ban quản lý TripC có quyền quyết định về việc lưu giữ hay loại
              bỏ sản phẩm đã đăng trên Ứng dụng cung cấp dịch vụ TMĐT TripC mà
              không cần báo trước.
            </li>
            <li>
              - Thành viên vi phạm các quy định về danh mục hàng hóa bị cấm kinh
              doanh hoặc/và cấm quảng cáo trên TripC sẽ bị xóa tài khoản và
              không được đăng tin lưu trú trên TripC, đồng thời phải tự chịu
              trách nhiệm pháp lý đối với các hành vi vi phạm pháp luật Việt Nam
              hiện hành.
            </li>
            <li>
              - Trường hợp thành viên vi phạm quy chế hoạt động của Ứng dụng
              cung cấp dịch vụ TMĐT TripC dẫn đến thiệt hại cho Ứng dụng cung
              cấp dịch vụ TMĐT hoặc Công ty, Ban quản lý Ứng dụng cung cấp dịch
              vụ TMĐT sẽ yêu cầu thành viên bồi thường thiệt hại theo các giấy
              tờ, căn cứ chứng minh hợp lệ.
            </li>
          </ul>
        </ul>

        <ul className="mt-4">
          <li className="font-medium" id="applicable-terms">
            XIII. Điều khoản áp dụng
          </li>
          <li>
            Quy chế của Ứng dụng cung cấp dịch vụ TMĐT TripC chính thức có hiệu
            lực thi hành kể từ ngày ký Quyết định ban hành kèm theo Quy chế này.
            Ứng dụng cung cấp dịch vụ TMĐT TripC có quyền thay đổi Quy chế bằng
            cách thông báo lên Ứng dụng TripC cho các thành viên biết. Quy chế
            sửa đổi có hiệu lực kể từ ngày Quyết định về việc sửa đổi Quy chế có
            hiệu lực. Việc thành viên tiếp tục sử dụng dịch vụ sau khi Quy chế
            sửa đổi được công bố và thực thi đồng nghĩa với việc họ đã chấp nhận
            Quy chế sửa đổi này.
          </li>
          <li>
            Quy chế hoạt động sẽ được TripC cập nhật bổ sung liên tục theo thực
            tế hoạt động, theo quy định pháp luật hiện hành và sẽ được thông báo
            công khai trước 07 (bảy) ngày trên Ứng dụng trước khi áp dụng chính
            thức. Thành viên tham gia Ứng dụng cung cấp dịch vụ TMĐT TripC có
            trách nhiệm tuân theo quy chế hiện hành khi giao dịch trên Ứng dụng
            cung cấp dịch vụ TMĐT.
          </li>
        </ul>

        <ul className="mt-4">
          <li className="font-medium">XIV. Điều khoản cam kết</li>

          <li>
            Mọi thành viên tham gia giao dịch trên Ứng dụng cung cấp dịch vụ
            TMĐT TripC cam kết chấp thuận thực hiện và tuân theo đúng nội dung
            Quy chế này.
          </li>

          <li>
            Mọi thắc mắc của khách hàng/Người cung cấp dịch vụ xin vui lòng liên
            hệ với Ban quản lý Ứng dụng cung cấp dịch vụ TMĐT TripC theo thông
            tin dưới đây để được giải đáp:
          </li>

          <li>Địa chỉ liên hệ chính thức:</li>
        </ul>

        <ul className="mt-4">
          <li className="font-medium">
            - Ứng dụng cung cấp dịch vụ thương mại điện tử TripC
          </li>

          <li>- CÔNG TY CỔ PHẦN ALLY AI</li>
          <li>
            - Địa chỉ:{" "}
            <span className="italic">
              153 Đống Đa, Phường Thạch Thang, Quận Hải Châu, Thành phố Đà Nẵng
            </span>
          </li>
          <li>
            - Hotline: <span className="italic">0935479122</span>
          </li>
          <li>
            - Email: <span className="italic">Cs@tripc.ai</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SupplierPolicyPage;
