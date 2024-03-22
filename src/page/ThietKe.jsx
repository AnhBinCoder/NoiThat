import { useState, useEffect } from "react";
import reactLogo from "/src/assets/react.svg";
import viteLogo from "/vite.svg";
import Footer from "../components/Footer";
import Header from "../components/Header";
import api from "../config/axios";
import { convertToCurrency } from "../utils/currency";

const ThietKe = () => {
  const [data, setData] = useState("");
  const [modalVisible, setModalVisible] = useState(false);
  const [categories, setCategories] = useState([]);
  const [total, setTotal] = useState(0);

  const fetchCategory = async () => {
    const response = await api.get("/categories");
    console.log(response);
    setCategories(response.data);
  };

  useEffect(() => {
    fetchCategory();
  }, []);
  const changeTotalPrice = (pricepricePerUnit) => {
    setTotal(total + pricepricePerUnit);
  };

  return (
    <>
      <Header />

      <div className="flex flex-col  items-start mt-24">
        <div className="flex flex-col items-center gap-[26px] pt-[50px] npm i axios px-0 relative flex-[0_0_auto]">
          <div className="relative max-w-screen-xl flex-[0_0_auto]" />
          <div className="flex flex-col items-center px-[80px] py-0 relative self-stretch w-full flex-[0_0_auto]">
            <div className="flex max-w-screen-xl  items-start px-[20px] py-0 relative flex-[0_0_auto]">
              <div className="flex flex-col  items-start pt-0 pb-[54.28px] px-0 relative">
                <div className="flex flex-wrap h-[409.72px] items-start justify-center gap-[0px_0px] relative self-stretch w-full">
                  <img
                    className="relative  h-[395.5px]"
                    alt="Image"
                    src="https://c.animaapp.com/jFT1CjYZ/img/image-1.png"
                  />
                </div>
              </div>
              <div className="flex flex-col  items-start pl-[26px] pr-0 py-0 relative">
                <div className="flex flex-col items-start gap-[13px] pt-0 pb-[13px] px-0 relative self-stretch w-full flex-[0_0_auto]">
                  <div className="flex items-start pl-0 pr-[303.48px] pt-0 pb-[14px] relative self-stretch w-full flex-[0_0_auto] border-b [border-bottom-style:solid] border-xaynhadeponlinecomalto">
                    <div className="inline-flex flex-col items-start gap-[2.75px] self-stretch relative flex-[0_0_auto]">
                      <p className="relative w-fit mt-[-1.00px] font-xaynhadeponline-com-inter-semi-bold-13 font-[number:var(--xaynhadeponline-com-inter-semi-bold-13-font-weight)] text-xaynhadeponlinecommine-shaft text-[length:var(--xaynhadeponline-com-inter-semi-bold-13-font-size)] tracking-[var(--xaynhadeponline-com-inter-semi-bold-13-letter-spacing)] leading-[var(--xaynhadeponline-com-inter-semi-bold-13-line-height)] whitespace-nowrap [font-style:var(--xaynhadeponline-com-inter-semi-bold-13-font-style)]">
                        Mẫu Phòng Ngủ - PN 01
                      </p>
                      <div className="flex items-center pl-0 pr-[71.48px] py-0 self-stretch w-full relative flex-[0_0_auto]">
                        <div className="inline-flex pl-[13px] pr-[2.63px] py-[3.25px] bg-xaynhadeponlinecommine-shaft-5 rounded-[2px] flex-col items-start relative flex-[0_0_auto]">
                          <div className="relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-medium text-xaynhadeponlinecommine-shaft text-[9.8px] tracking-[0] leading-[13px] whitespace-nowrap">
                            Phòng Ngủ Urbion
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="relative self-stretch w-full h-[240px]">
                    <div class="grid grid-cols-2 gap-4">
                      {categories.map((item) => {
                        return (
                          <>
                            {/* Vật liệu 1 */}
                            <div>
                              <button
                                className="flex items-center pl-[40px] pr-[61.78px] py-[14px] relative self-stretch w-full flex-[0_0_auto] rounded-[3.25px] border border-solid"
                                onClick={() => {
                                  console.log(`my_modal_${item.id}`);
                                  document
                                    .getElementById(`my_modal_${item.id}`)
                                    .showModal();
                                }}
                              >
                                <img
                                  className="relative flex-[0_0_auto]"
                                  alt="Div element icon"
                                  src="https://c.animaapp.com/jFT1CjYZ/img/div-element-icon-5.svg"
                                />
                                <h1 className="ml-2">{item.name}</h1>
                              </button>
                              <Modal
                                categoryID={item.id}
                                changeTotalPrice={changeTotalPrice}
                              />
                            </div>
                          </>
                        );
                      })}
                    </div>
                  </div>

                  <div className="flex flex-col items-start relative self-stretch w-full flex-[0_0_auto]">
                    <div className="flex flex-col items-start p-[13px] relative self-stretch w-full flex-[0_0_auto] bg-xaynhadeponlinecomwild-sand">
                      <div className="flex items-center justify-end pl-[177.61px] pr-0 py-0 relative self-stretch w-full flex-[0_0_auto]">
                        <div className="inline-flex pl-[6.5px] pr-0 py-0 flex-col items-start relative flex-[0_0_auto]">
                          <div className="flex w-[129.16px] pl-[6.5px] pt-[6px] pr-0 py-[3.25px] bg-xaynhadeponlinecommine-shaft-5 flex-col items-start relative flex-[0_0_auto]">
                            <div className="relative w-fit mt-[-1.00px] font-xaynhadeponline-com-inter-semi-bold-14-6 font-[number:var(--xaynhadeponline-com-inter-semi-bold-14-6-font-weight)] text-xaynhadeponlinecomamber text-[length:var(--xaynhadeponline-com-inter-semi-bold-14-6-font-size)] tracking-[var(--xaynhadeponline-com-inter-semi-bold-14-6-letter-spacing)] leading-[var(--xaynhadeponline-com-inter-semi-bold-14-6-line-height)] whitespace-nowrap [font-style:var(--xaynhadeponline-com-inter-semi-bold-14-6-font-style)]">
                              {convertToCurrency(total)}
                            </div>
                          </div>
                        </div>
                        <p className="absolute h-[17px] top-[5px] left-[80px] font-xaynhadeponline-com-inter-regular-11-4 font-[number:var(--xaynhadeponline-com-inter-regular-11-4-font-weight)] text-xaynhadeponlinecommine-shaft text-[length:var(--xaynhadeponline-com-inter-regular-11-4-font-size)] tracking-[var(--xaynhadeponline-com-inter-regular-11-4-letter-spacing)] leading-[var(--xaynhadeponline-com-inter-regular-11-4-line-height)] whitespace-nowrap [font-style:var(--xaynhadeponline-com-inter-regular-11-4-font-style)]">
                          Tổng chi phí xây dựng dự tính:
                        </p>
                      </div>
                    </div>
                    <a
                      className="flex  items-center justify-center pl-[27px] pr-[33.5px] py-[10.75px] relative self-stretch w-full flex-[0_0_auto] mt-[-0.25px] rounded-[15px]"
                      href="/HoanThanh"
                    >
                      <button className="btn btn-outline btn-info  flex min-w-[156px] items-center justify-center pl-[27px] pr-[33.5px] py-[10.75px] relative self-stretch w-full flex-[0_0_auto] mt-[-0.25px] rounded-[15px]">
                        Hoàn Tất
                      </button>
                    </a>
                    {/* <button className="all-[unset] border-info rounded-[15px] box-border flex min-w-[156px] items-center justify-center pl-[27px] pr-[33.5px] py-[10.75px] relative self-stretch w-full flex-[0_0_auto] mt-[-0.25px] bg-xaynhadeponlinecomamber-40 rounded-[3.25px] border border-solid border-xaynhadeponlinecomamber">
                        <div className="flex flex-col items-center pl-[179.9px] pr-[175.77px] py-0 relative flex-1 grow">
                          <div className="relative w-fit mt-[-1.00px]   whitespace-nowrap ">
                            Hoàn Tất
                          </div>
                        </div>
                        <div className="relative self-stretch w-[21.92px] ml-[-6.5px] rotate-180" />
                      </button> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute w-[713px] h-[27px] top-[162px] left-[126px] ">
        <ul className="steps ">
          <a className="step step-info" href="/">
            {" "}
            Chọn mẫu Phòng
          </a>
          <a className="step step-info " href="/KichThuoc">
            {" "}
            Tùy chỉnh kích thước
          </a>
          <a className="step step-info" href="/ThietKe">
            {" "}
            Tùy chỉnh Nội Thất
          </a>
          <a className="step step-" href="/HoanThanh">
            {" "}
            Hoàn thành
          </a>
        </ul>
      </div>
      <Footer />
    </>
  );
};

export default ThietKe;

const Modal = ({ categoryID, changeTotalPrice }) => {
  const [products, setProduct] = useState([]);
  const [selected, setSelected] = useState(null);
  const fetchProduct = async () => {
    const response = await api.get(`/product/${categoryID}`);
    setProduct(response.data);
  };

  const handleSave = () => {
    changeTotalPrice(selected?.pricePerUnit);

    const modal = document.getElementById(`my_modal_${categoryID}`);
    modal.close();
  };

  useEffect(() => {
    fetchProduct();
  }, [categoryID]);

  return (
    <></>
    // <div>
    //   <dialog id={`my_modal_${categoryID}`} className="modal">
    //     <div className="modal-box">
    //       <form method="dialog">
    //         <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
    //           ✕
    //         </button>
    //       </form>
    //       <h3 className="font-bold text-lg">Chọn vật liệu</h3>

    //       {/* Nội dung trong modal */}
    //       <div className="grid grid-cols-2 gap-6">
    //         {products.map((item) => {
    //           return (
    //             <>
    //               {/* Khung 1 */}
    //               <label
    //                 onClick={() => {
    //                   setSelected(item);
    //                 }}
    //               >
    //                 <input
    //                   type="radio"
    //                   defaultValue={1}
    //                   className="peer hidden"
    //                   name="framework"
    //                 />
    //                 <div className="hover:bg-gray-50 flex flex-col items-center justify-between px-4 py-2 border-2 rounded-lg cursor-pointer text-sm border-gray-200 group peer-checked:border-blue-500">
    //                   <div className="group relative">
    //                     <div
    //                       className="w-full overflow-hidden rounded-md bg-gray-200"
    //                       style={{
    //                         height: 150,
    //                       }}
    //                     >
    //                       <div className=" overflow-hidden">
    //                         <img
    //                           src={item.resources[0].url}
    //                           alt="Black machined steel pen with hexagonal grip and small white logo at the top."
    //                           className="h-full w-full object-cover object-center group-hover:opacity-75"
    //                         />
    //                       </div>
    //                     </div>
    //                     <div className="mt-6">
    //                       <p className="text-sm text-gray-500">
    //                         {item.productName}
    //                       </p>
    //                       <h3 className="mt-1 font-semibold text-gray-900">
    //                         {item.name}
    //                       </h3>
    //                       <p className="mt-1 text-gray-900">
    //                         {convertToCurrency(item.pricePerUnit)}
    //                       </p>
    //                     </div>
    //                   </div>
    //                   <h4 className="sr-only">Available colors</h4>
    //                   <ul
    //                     role="list"
    //                     className="mt-auto flex items-center justify-center space-x-3 pt-6"
    //                   >
    //                     <li
    //                       className="h-4 w-4 rounded-full border border-black border-opacity-10"
    //                       style={{
    //                         backgroundColor: "#111827",
    //                       }}
    //                     >
    //                       <span className="sr-only">Black</span>
    //                     </li>
    //                     <li
    //                       className="h-4 w-4 rounded-full border border-black border-opacity-10"
    //                       style={{
    //                         backgroundColor: "#fde68a",
    //                       }}
    //                     >
    //                       <span className="sr-only">Brass</span>
    //                     </li>
    //                     <li
    //                       className="h-4 w-4 rounded-full border border-black border-opacity-10"
    //                       style={{
    //                         backgroundColor: "#e5e7eb",
    //                       }}
    //                     >
    //                       <span className="sr-only">Chrome</span>
    //                     </li>
    //                   </ul>
    //                 </div>
    //               </label>
    //             </>
    //           );
    //         })}
    //       </div>

    //       {/* Save button */}
    //       <button
    //         type="button"
    //         className="btn static mt-5 ml-[370px] bot-2 "
    //         onClick={handleSave}
    //       >
    //         Save
    //       </button>
    //     </div>
    //   </dialog>
    // </div>
  );
};
