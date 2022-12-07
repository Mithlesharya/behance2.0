import React from 'react'
import { behanceItem } from '../Data'
import { AiFillFolderOpen } from 'react-icons/ai'

const BehanceList = () => {
  return (
    <>
      <section>
        <div className="container-fluid px-4 ">
          <div className="grid lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 gap-3 py-6">
            {
              behanceItem.map((item) => (
                <div className="category-item cursor-pointer ">
                  <div className="cat-img relative overflow-hidden rounded-md  ">
                    <div className="bg-overlay"></div>
                    <div className="save-file indent-1 flex items-center absolute top-2 left-2 py-2 px-3 bg-[#00000069] rounded-full">
                      <div className="s-icon text-sm text-white">
                        <AiFillFolderOpen />
                      </div>
                      <span className='font-medium text-white text-xs'>Save</span>
                    </div>
                    <div className="patch absolute translate-y-[-10px]  right-2">
                      <img src={item.fePatch} alt="" />
                    </div>
                    <img src={item.featureImg} alt="" />
                  </div>
                  <div className="cat-info flex justify-between py-3">
                    <div className="cat-name w-[80%]">
                      <h4 className='font-medium text-sm hover:underline leading-[15px]'>{item.featureTxt}</h4>
                      <span className='text-sm hover:underline'>{item.feUser}</span>
                    </div>
                    <div className="be-time flex  pr-2">
                      <div className="be-like flex  mr-2">
                        <div className="li-icon mt-[3px] mr-1 text-sm text-[#959595]">
                          {item.felikeIcons}
                        </div>
                        <span className='text-sm text-[#959595]'>{item.feLike}k</span>
                      </div>
                      <div className="be-watch flex ">
                        <div className="wa-icon mt-[3px] mr-1 flex text-[#959595]  text-sm">
                          {item.fewatchIcon}
                        </div>
                        <span className='text-sm text-[#959595]'>{item.feWatch}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            }
          </div>
        </div>
      </section>
    </>
  )
}

export default BehanceList