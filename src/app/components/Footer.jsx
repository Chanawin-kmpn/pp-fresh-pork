import React from "react";
import Image from "next/image";
function Footer() {
  return (
    <footer className="bg-white flex flex-col items-center">
      <div className="self-center flex flex-col gap-4 px-4 py-2 mx-auto lg:flex-row lg:gap-8 lg:px-20 lg:py-16">
        <div className="min-w-[160px] mx-auto lg:mx-0">
          <Image
            src="/assets/images/logo/ppfreshpork-logo.png"
            width={160}
            height={116}
            alt="Logo"
            priority={true}
          />
        </div>
        <div className="flex flex-col gap-4 max-w-[448px] text-center lg:gap-[10px] lg:text-left">
          <h5 className="text-h5 font-bold w-full lg:w-fit">
            บริษัท พี.พี. เฟรชพอร์ค จำกัด
          </h5>
          <p className="text-sm lg:text-lg">
            ผลิตและจำหน่ายสินค้าแปรรูปหลากหลายจำพวกกลุ่มหมูกระทะ และ
            กลุ่มหมูชาบู สด สะอาด สะดวกรวดเร็ว ถูกสุขอนามัย
            คุณภาพของสินค้าเหมาะแก่การบริโภคในทุกรูปแบบ
            <br />
            <br />
            ผลิตภัณฑ์ทุกอย่างผ่านกระบวนการผลิตด้วยเครื่องจักร
            ที่ทันสมัยมีมาตรฐาน และเป็นบริษัทที่ได้รองรับโดยมาตรฐาน อย. GMP และ
            HACCP
          </p>
        </div>
        <div className="flex flex-col gap-4 w-fit lg:gap-[10px]">
          <h5 className="text-h5 font-bold w-full text-center lg:w-fit lg:text-left">
            ติดต่อเรา
          </h5>
          <div className="flex flex-col gap-4">
            <div className="flex flex-col items-start gap-2 lg:gap-4 lg:flex-row">
              <h6 className="whitespace-nowrap text-h6 font-bold ">
                ที่อยู่บริษัท:
              </h6>
              <p className="text-sm lg:text-lg">
                98/6 หมู่ 5 ซอย ราษฏร์สามัคคี 3 ตำบล ท่าข้าม อำเภอ สามพราน
                จังหวัด นครปฐม 73110
              </p>
            </div>
            <div className="flex flex-col gap-2 lg:gap-4 lg:flex-row">
              <h6 className="text-h6 font-bold">วันเวลาทำการ:</h6>
              <p className="text-sm lg:text-lg">
                จันทร์ - เสาร์ เวลา 9:00 - 17:00 น.
              </p>
            </div>
            <div className="flex flex-col gap-2 lg:gap-4 lg:flex-row">
              <h6 className="text-h6 font-bold">โทร:</h6>
              <div>
                <p className="text-sm lg:text-lg">085-247-9479</p>
                <p className="text-sm lg:text-lg">080-931-3628</p>
              </div>
            </div>
            <div className="flex flex-col gap-2 lg:gap-4 lg:flex-row">
              <h6 className="text-h6 font-bold">อีเมล:</h6>
              <p className="text-sm lg:text-lg">ppfreshpork@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
      <div className="self-stretch bg-third text-black2 text-center py-8">
        <p>Copyright 2024 © P.P. Fresh Pork </p>
      </div>
    </footer>
  );
}

export default Footer;
