import React, { useState,useEffect } from 'react';
import user1 from "./pages/user.json";
import VCard from "vcard-creator";

var ID = 0;
var user = user1[ID];

const fast_icon = user.social_media.map((links) => (
  <div key={links.ID} className="list-inline-item justify-content-between ">
    {links.ID === "facebook" && (
      <a href={links.link}><i className="bi bi-facebook bi-3x"></i></a>
    )}
    {links.ID === "instagram" && (
      <a href={links.link}><i className="bi bi-instagram"></i></a>
    )}
    {links.ID === "linkedin" && (
      <a href={links.link}><i className="bi bi-linkedin"></i></a>
    )}
    {links.ID === "twitter" && (
      <a href={links.link}><i className="bi bi-twitter"></i></a>
    )}
    {links.ID === "email" && (
      <a href={`mailto:${links.link}`}><i className="bi bi-envelope"></i></a>
    )}
  </div>
));

const link_button = user.social_media.map((links) => (
  <div key={links.ID} className="mx-auto m-2 ">
    {links.ID === "facebook" && (
      <a href={links.link}>
        <button className="btn btn-outline-success d-flex w-75 mx-auto">
          <span className="btn-icon "><i className="bi bi-facebook " /></span>
          <span className="ms-3">Facebook</span>
        </button>
      </a>
    )}
    {links.ID === "instagram" && (
      <a href={links.link}>
        <button className="btn btn-outline-success  d-flex w-75 mx-auto">
          <span className="btn-icon "><i className="bi bi-instagram " /></span>
          <span className="ms-3">Instagram</span>
        </button>
      </a>
    )}
    {links.ID === "linkedin" && (
      <a href={links.link}>
        <button className="btn btn-outline-success  d-flex w-75 mx-auto">
          <span className="btn-icon "><i className="bi bi-linkedin " /></span>
          <span className="ms-3">Linked-in</span>
        </button>
      </a>
    )}
    {links.ID === "twitter" && (
      <a href={links.link}>
        <button className="btn btn-outline-success  d-flex w-75 mx-auto">
          <span className="btn-icon "><i className="bi bi-twitter " /></span>
          <span className="ms-3">Twitter</span>
        </button>
      </a>
    )}
    {links.ID === "email" && (
      <a href={`mailto:${links.link}`}>
        <button className="btn btn-outline-success  d-flex w-75 mx-auto">
          <span className="btn-icon "><i className="bi bi-envelope " /></span>
          <span className="ms-3">Email</span>
        </button>
      </a>
    )}
  </div>
));



const App = () => {
  const [user1, setUser1] = useState();
//   fetch('http://localhost:3030/api/1')
// .then(
//     function(response) {
//       if (response.status !== 200) {
//         console.log('Lỗi, mã lỗi ' + response.status);
//         return;
//       }
//       // parse response data
//       response.json().then(data => {
//         console.log('run fetch');
//         console.log({inside : data});
//       })
//     }
//   )
//   .catch(err => {
//     console.log('Error :-S', err)
//   });
  useEffect(()=>{
    console.log(process.env.REACT_APP_API_URL);
    fetch('http://localhost:3030/api/1')
                  .then((res)=> 
                  {
                    console.log(res);
                    return res.json().then(data =>{
                      console.log(data);
                    });
                  })
                  .catch(err =>{
                    console.log('Eror: -S', err);
                    
                  })
                  // .then((res)=>{
                  //   // setUser1(res);
                  //   console.log(res);
                  // });
  },)



  //file .vcf
  const createVcfFile = () => {
    const myVCard = new VCard();
    myVCard
        .addName(user.name)
        .addAddress(user.address)
        .addNickname(user.nick_name)
        .addPhoneNumber(user.phone);
    user.social_media.map((value)=>{
        myVCard.addSocial(value.link);
    })
    console.log(myVCard.toString())
    const vCardData = myVCard.toString();
    const blob = new Blob([vCardData], { type: 'text/vcard;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', 'contact.vcf');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
}
  // const [phoneNumber, setPhoneNumber] = useState('');

  // const handlePhoneButtonClick = () => {
  //   setPhoneNumber(user.phone); // Cập nhật số điện thoại vào state
  // };
  return (
    <div className="container">
      <div className="row">
        <div className="mx-auto">
          <div className="mx-auto text-center">
            <img src="./img/71e42070-d8ef-488e-b916-276e56336e003.jpg" alt="Avatar" className="rounded-circle m-4 mx-auto text-center" />
            <span className="name text-center">
              <h1>{user.name}</h1>
            </span>
            <span className="description text-center">
              <p>
                {user.title}<br></br>
                {user.organization}
              </p>
            </span>
          </div>

          <button className="btn btn-download  btn-outline-info m-4 d-flex w-60 mx-auto">
          <a onClick={createVcfFile} download>
              <span className><i className="bi bi-download " />
                <span className="ms-3"> Thêm vào danh bạ</span>
              </span>
            </a>
          </button>

          <div className="fast-icon mx-auto text-center fa-xs">
            {fast_icon}
          </div>

          <div className="social_media-box">

            <div className="social_media-bg mx-auto pt-2 pb-4 rounded-top border">

              <button className="btn btn-outline-success m-2 d-flex w-75 mx-auto">
                <i className="bi bi-phone " />
                <span className="ms-3">Phone</span>
              </button>
              {/* {phoneNumber && (
                <p className="phone-number text-center">{phoneNumber}</p>
              )} */}
              {/* <button className="btn btn-outline-success m-2 d-flex w-75 mx-auto">
                <span className="btn-icon "><i className="bi bi-envelope " /></span>
                <span className="ms-3">Email</span>
              </button>
              <button className="btn btn-outline-success m-2 d-flex w-75 mx-auto">
                <span className="btn-icon "><i className="bi bi-linkedin " /></span>
                <span className="ms-3">Linked-in</span>
              </button>
              <button className="btn btn-outline-success m-2 d-flex w-75 mx-auto">
                <span className="btn-icon "><i className="bi bi-facebook " /></span>
                <span className="ms-3">Social Media</span>
              </button> */}
              {link_button}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
