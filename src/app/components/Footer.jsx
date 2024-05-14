import React from "react";
import Image from "next/image";
function Footer() {
  return (
    <footer className="bg-white flex flex-col items-center">
      <div className="self-center flex gap-8 mx-auto px-20 py-16">
        <div className="min-w-[160px]">
          <Image
            src="/assets/images/logo/ppfreshpork-logo.png"
            width={160}
            height={116}
            alt="Logo"
            priority={true}
          />
        </div>
        <div className="flex flex-col gap-[10px] max-w-[448px]">
          <h5 className="text-h5 font-bold w-fit">
            บริษัท พี.พี. เฟรชพอร์ค จำกัด
          </h5>
          <p className="">
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
        <div className="w-fit flex flex-col gap-[10px]">
          <h5 className="text-h5 font-bold">ติดต่อเรา</h5>
          <div className="flex flex-col gap-[10px]">
            <div className="flex items-start gap-[10px]">
              <h6 className="whitespace-nowrap text-h6 font-bold ">
                ที่อยู่บริษัท:
              </h6>
              <p>
                98/6 หมู่ 5 ซอย ราษฏร์สามัคคี 3 ตำบล ท่าข้าม อำเภอ สามพราน
                จังหวัด นครปฐม 73110
              </p>
            </div>
            <div className="flex gap-[10px]">
              <h6 className="text-h6 font-bold">วันเวลาทำการ:</h6>
              <p>จันทร์ - เสาร์ เวลา 9:00 - 17:00 น.</p>
            </div>
            <div className="flex gap-[10px]">
              <h6 className="text-h6 font-bold">โทร:</h6>
              <p>085-247-9479</p>
              <p>080-931-3628</p>
            </div>
            <div className="flex gap-[10px]">
              <h6 className="text-h6 font-bold">อีเมล:</h6>
              <p>ppfreshpork@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
      <div className="self-stretch bg-primary text-gray5 text-center py-8">
        <p>Copyright 2024 © P.P. Fresh Pork </p>
      </div>
    </footer>
  );
}

export default Footer;
