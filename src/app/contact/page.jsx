import React from "react";

function Contact() {
  return (
    <div className="container mx-auto">
      <div className="flex gap-4">
        <div className="flex-1">
          <iframe
            className="w-full h-[461px] rounded-md"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14214.752969758734!2d100.23930552120481!3d13.708278058559488!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e2ebb3413245c3%3A0x3457c3adabe8415c!2z4Lia4Lij4Li04Lip4Lix4LiXIOC4nuC4tS7guJ7guLUuIOC5gOC4n-C4o-C4iuC4nuC4reC4o-C5jOC4hCDguIjguLPguIHguLHguJQ!5e1!3m2!1sth!2sth!4v1715833640338!5m2!1sth!2sth"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div className="flex-1 bg-white p-4">
          <h4 className="text-h4 font-bold text-primary mb-4">ติดต่อเรา</h4>
          <div className="flex flex-col gap-4">
            <div className="flex gap-2">
              <h6 className="text-h6 font-bold">ที่อยู่:</h6>
              <p>
                98/6 หมู่ 5 ซอย ราษฏร์สามัคคี 3 ตำบล ท่าข้าม อำเภอ สามพราน
                จังหวัด นครปฐม 73110
              </p>
            </div>
            <div className="flex gap-2">
              <h6 className="text-h6 font-bold">วันเวลาทำการ:</h6>
              <p>จันทร์ - เสาร์ เวลา 9:00 - 17:00 น.</p>
            </div>
            <div className="flex gap-2">
              <h6 className="text-h6 font-bold">โทร:</h6>
              <p>
                085-247-9479 <br /> 080-931-3628{" "}
              </p>
            </div>
            <div className="flex gap-2">
              <h6 className="text-h6 font-bold">อีเมล:</h6>
              <p>ppfreshpork@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
