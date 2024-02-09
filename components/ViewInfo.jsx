"use client"

import { useState } from "react"

export default function ViewInfo({item}) {

  return (
    <div>
   
      {/* The button to open modal */}
        <label htmlFor="my_modal_7" className="link underline-offset-2 hover:text-gray-300">{item.title}</label>

        {/* Put this part before </body> tag */}
        <input type="checkbox" id="my_modal_7" className="modal-toggle" />
        <div className="modal" role="dialog">
          <div className="modal-box">
            <h3 className="text-lg font-bold">{item.title}</h3>
          </div>
          <label className="modal-backdrop" htmlFor="my_modal_7">Close</label>
        </div>
    </div>
  )
}
