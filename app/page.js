"use client"
import { MdDelete } from "react-icons/md";
import { MdEdit } from "react-icons/md";
import { MdAddToPhotos } from "react-icons/md";
import { MdCancel } from "react-icons/md";

import { useState } from "react";

export default function Page() {
  const [opencart, setOpencart] = useState(false)
  const [array, setArray] = useState([])
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [adress, setAdress] = useState("")
  const [phone, setPhone] = useState("")
  const [orr, setOrr] = useState("")
  const [userindex, setUserindex] = useState(null)


  const open = () => {
    setOpencart(true)
  }
  const adduser = () => {
    var username = name.trim()
    var useremail = email.trim()
    var useradress = adress.trim()
    var userphone = phone.trim()
    if (username.length < 3 || useremail.length < 3 || useradress.length < 3 || userphone.length < 3) {
      setOrr("Please fill in all fields.")
    } else {
      var userobj = {
        no: name,
        em: email,
        adr: adress,
        pho: phone,
      }
      setArray([...array, userobj])
      setName("");
      setEmail("");
      setAdress("");
      setPhone("");
      setOrr("")
      setOpencart(false)
    }
  }

  var deleteUser = (i) => {
    const updatedItems = array.filter((item, ind) => ind != i)
    setArray(updatedItems)
  }

  const edititem = (item, i) => {
   
    setName(item.no);
    setEmail(item.em);
    setAdress(item.adr);
    setPhone(item.pho);
    setUserindex(i);
    setOpencart(true);
  };

  const update = () => {
    if (name.length < 3 || email.length < 3 || adress.length < 3 || phone.length < 3) {
      setOrr("Please fill in all fields.");
      return;
    }

    const newArray = [...array];

    newArray[userindex] = {
      no: name,
      em: email,
      adr: adress,
      pho: phone,
    };

    setArray(newArray);
    setOpencart(false);
    setUserindex(null);
    setName("");
    setEmail("");
    setAdress("");
    setPhone("");
    setOrr("");
  };

  return (
    <>
      <div className="flex justify-center mt-[45px] ">
        <div className="h-[500px] w-[810px] bg-[#d8d6d6] overflow-auto drop-shadow-2xl">
          <div className="h-[50px] w-[810px] bg-[#435D7D] fixed">
            <div className="flex items-center justify-around   ">
              <h1 className="text-[white] font-bold  mt-[12px] " >Manage Employees</h1>
              <button className="h-[30px] w-[200px] text-[white] bg-[#28a745] rounded-md ml-[300px] mt-[10px] " onClick={open} > <div className="flex justify-evenly items-center"><MdAddToPhotos className="text-[21px] " /> Add Employees </div></button>

            </div>
          </div>

          <table className=" w-[100%] border border-solid border-black border-collapse mt-[50px]	 ">
            <thead>
            <tr >
              
              <th className='border border-gray-300 text-left p-2 bg-gray-200'>No</th>
              <th className='border border-gray-300 text-left p-2 bg-gray-200'>	Name</th>
              <th className='border border-gray-300 text-left p-2 bg-gray-200' >Email</th>
              <th className='border border-gray-300 text-left p-2 bg-gray-200'>Address</th>
              <th className='border border-gray-300 text-left p-2 bg-gray-200'>Phone</th>
              <th className='border border-gray-300 text-left p-2 bg-gray-200'>Actions</th>
            </tr>
            </thead>
            {
              array.map((user, i) => {
                return (
                  <tbody  key={i}>
                  <tr >
                    <td className='border border-gray-300 text-left p-2 bg-gray-200' >{i + 1}</td>
                    <td className='border border-gray-300 text-left p-2 bg-gray-200'>{user.no.length > 13 ? user.no.substring(0, 13) + '...' : user.no}</td>
                    <td className='border border-gray-300 text-left p-2 bg-gray-200' >{user.em.length > 13 ? user.em.substring(0,13) + '...' : user.em}</td>
                    <td className='border border-gray-300 text-left p-2 bg-gray-200'>{user.adr.length > 13 ? user.adr.substring(0,13) + '...' : user.adr}</td>
                    <td className='border border-gray-300 text-left p-2 bg-gray-200'>{user.pho.length > 13 ? user.pho.substring(0,13) + '...' : user.pho}</td>
                    <td className='border border-gray-300 text-left p-2 bg-gray-200 '>
                      <div className=" flex justify-around">
                        <MdEdit className="text-[green] text-[21px] cursor-pointer" onClick={() => edititem(user, i)} /> <MdDelete className="text-[red] text-[21px] cursor-pointer" onClick={() => deleteUser(i)} />
                      </div>
                    </td>

                  </tr>
                  </tbody>
                )
              })
            }
          </table>
        </div>
      </div>
      {opencart &&
        <div className="h-full drop-shadow-2xl w-full bg-[#7a7a7a69] absolute top-[0px] left-[0px]">

          <div className="h-[430px] drop-shadow-2xl w-[400px] bg-[#345c8b] absolute top-[65px] left-[450px] ">
            <div className="flex justify-around">
              <h1 className="font-bold text-[white] mt-[15px] ">Add Employee</h1>
              <button className="text-[white] ml-[190px] mt-[15px]" onClick={() => close(setOpencart(false))}><MdCancel className="text-[21px]" /></button>
            </div>
            <hr className="mt-[10px]" />
            <label>
              <h1 className="text-[white] ml-[45px] mt-[15px]">Name</h1>
              <input type="text" className="h-[30px] w-[300px] ml-[45px] mt-[5px] outline-none pl-[10px] rounded-[5px]" onChange={(e) => { setName(e.target.value) }} value={name} />

              <h1 className="text-[white] ml-[45px] mt-[15px]">Email</h1>
              <input type="email" className="h-[30px] w-[300px] ml-[45px] mt-[5px] outline-none pl-[10px] rounded-[5px]" onChange={(e) => { setEmail(e.target.value) }} value={email} />

              <h1 className="text-[white] ml-[45px] mt-[15px]">Adress</h1>
              <input type="text" className=" h-[30px] w-[300px] ml-[45px] mt-[5px] outline-none pl-[10px] rounded-[5px]" onChange={(e) => { setAdress(e.target.value) }} value={adress} />

              <h1 className="text-[white] ml-[45px] mt-[15px]">Phone</h1>
              <input type="number" className=" h-[30px] w-[300px] ml-[45px] mt-[5px] outline-none pl-[10px] rounded-[5px] " onChange={(e) => { setPhone(e.target.value) }} value={phone} />
            </label>

            <p className="text-[red] ml-[80px]">{orr ? orr : ""}</p>
            {userindex !== null ?
              <button className="bg-[#28a745] h-[30px] w-[100px] text-[white] ml-[150px] mt-[20px] rounded-[5px]" onClick={update}>update</button> :
              <button className="bg-[#28a745] h-[30px] w-[100px] text-[white] ml-[150px] mt-[20px] rounded-[5px]" onClick={adduser}>submite</button>
            }
          </div>


        </div>
      }
    </>

  );
}
