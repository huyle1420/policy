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
      <div className="col col-span-1">
        <Accordion
          type="single"
          collapsible
          className="w-full"
          defaultValue="item-1"
        >
          <AccordionItem value="item-1">
            <AccordionTrigger>
              Quy định về SHTT và bảo mật thông tin
            </AccordionTrigger>
            <AccordionContent className="flex flex-col gap-4 text-balance">
              <p>Xử lý vi phạm Quyền SHTT trên Sàn TripC</p>
              <p>Cam kết bảo mật thông tin</p>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>Quy định liên quan đơn hàng</AccordionTrigger>
            <AccordionContent className="flex flex-col gap-4 text-balance">
              <p>Chính sách vận chuyển, giao hàng và đổi trả</p>
              <p>Chính sách vận hành đơn và xử lý vi phạm</p>
              <p>Chính sách giải quyết khiếu nại</p>
              <p>Chính sách hoàn tiền</p>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>
              Quy định về kinh doanh và sản phẩm được lên Sàn TripC
            </AccordionTrigger>
            <AccordionContent className="flex flex-col gap-4 text-balance">
              <p>Đăng khuyến mại</p>
              <p>Danh mục hàng hóa, dịch vụ kinh doanh có điều kiện</p>
              <p>Danh mục hàng hóa, dịch vụ không được quảng cáo</p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-3">
            <AccordionTrigger>
              Quyền và nghĩa vụ cơ bản của Nhà cung cấp
            </AccordionTrigger>
            <AccordionContent className="flex flex-col gap-4 text-balance">
              <p>Quyền lợi của Nhà cung cấp</p>
              <p>Nghĩa vụ của Nhà cung cấp</p>
              <p>Ngừng hợp tác trên Sàn TripC</p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-3">
            <AccordionTrigger>Quy chế hoạt động sàn</AccordionTrigger>
            <AccordionContent className="flex flex-col gap-4 text-balance">
              <p>Quy chế hoạt động sàn</p>
            </AccordionContent>
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
          <li className="font-medium">I. Nguyên tắc chung</li>
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
            vụ sàn giao dịch thươn gmại điện tử kết nối giữa Người cung cấp dịch
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
            trách nhiệm mọi vấn đềliên quan đến sản phẩm mà bên mình cung cấp.
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
          <li className="font-medium">II. Quy định chung</li>
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
            nội dung trong Quy chế của Sàn giao dịch TMDT TripC
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
          <li className="font-medium">
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
            </li>

            <li>
              <span className="font-medium">Bước 2</span>: Tìm kiếm dịch vụ phù
              hợp
            </li>

            <li>
              <span className="font-medium">Bước 3</span>: Nhấn chọn vào dịch vụ
              muốn xem chi tiết &gt;&gt; thao tác “Chọn” / “Đặt ngay” để tiến
              hành đặt dịch vụ
            </li>
            <li>Người dùng chọn khung giờ, ngày cho tour du lịch của mình</li>
            <li>Điền các thông tin theo form yêu cầu để tiến hành đặt tour</li>

            <li className="italic">Đối với dịch vụ có thanh toán:</li>

            <li className="italic">Đối với dịch vụ Đặt chỗ không cần cọc:</li>

            <li>
              <span className="italic">*Đối với dịch vụ Lưu trú:</span> Khách
              hàng điền ngày check in – check out, TripC sẽ đề xuất cho khách
              hàng các đơn vị liên kết và thông tin giá của các đơn vị liên kết.
              Khách hàng chọn biểu tượng mũi tên “-&gt;” ệ thống sẽ điều hướng
              sang website của đơn vị liên kết để Khách hàng tiến hành đặt dịch
              vụ.
            </li>

            <li>
              <span className="font-medium">Bước 4</span>:
            </li>
          </ul>

          <ul>
            <li>
              *Đối với dịch vụ cần thanh toán, chọn phương thức thanh toán phù
              hợp để đặt dịch vụ
            </li>
            <li>
              Thông tin đặt tour sẽ được gửi về cho Sàn và Nhà cung cấp và xác
              nhận trên hệ thống
            </li>

            <li className="font-medium">❖Quản lý thông tin đặt tour </li>

            <ul>
              <li>
                <span className="font-medium">Bước 1</span>Tại giao diện TripC,
                chọn “Tài khoản” &gt;&gt; chọn “Tour đã đặt”
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
              </li>
            </ul>

            <ul>
              <li className="font-medium">
                2. Quy trình dành cho Người cung cấp dịch vụ
              </li>
              <li className="font-medium">
                Quy trình đăng ký trở thành Nhà cung cấp
              </li>

              <li>
                <span className="font-medium">Bước 1: </span>Liên hệ để được tư
                vấn và trở thành Nhà cung cấp trên ứng dụng TripC qua email
                <span className="text-blue-500">cs@tripc.ai</span> hoặc số điện
                thoại: 0935479122
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
                đầy đủ các giấy tờ pháp lý cần thiết từ Người cung cấp dịch
                vụ,Phòng ban chuyên môn sẽ chịu trách nhiệm kiểm tra, tiến hành
                quy trình rà soát trước khi quyết định giao kết hợp đồng cung
                cấp dịch vụ TMĐT với Người cung cấp dịch vụ. Cụ thể:để kiểm tra
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
              <li className="font-medium">
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
              <li className="font-medium">
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
              <li className="font-medium">5. Chính sách kiểm hàng </li>
              <li>
                TripC là Ứng dụng cung cấp dịch vụ du lịch. Vì vậy, TripC không
                có chính sách kiểm hàng.
              </li>
            </ul>

            <ul>
              <li className="font-medium">6. Chính sách bảo hành</li>
              <li>
                TripC là Ứng dụng cung cấp dịch vụ du lịch. Vì vậy, TripC không
                có chính sách bảo hành.
              </li>
            </ul>

            <ul>
              <li className="font-medium">
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
          <li className="text-lg font-medium">IV. Quy trình thanh toán</li>

          <ul>
            <li className="font-medium">
              <span className="text-blue-500">4.1</span>
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
          <li className="text-lg font-medium">V. Đảm bảo an toàn giao dịch</li>

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
          <li className="text-lg font-medium">
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
          <li className="text-lg font-medium">
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
                <span className="italic underline">Đối với Người bán:</span>
                TripC thu thập các thông tin về: Địa chỉ email, mật khẩu, họ
                tên, số điện thoại, mã số thuế/ngày cấp/nơi cấp.
              </li>
              <li>
                <span className="italic underline">Đối với Người mua:</span>
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
          <li className="text-lg font-medium">
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
              <li className="font-medium italic">
                - Quy định kiểm soát thông tin dịch vụ đăng tải trên Ứng dụng:
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
          </ul>
        </ul>
      </div>
    </div>
  );
};

export default SupplierPolicyPage;
