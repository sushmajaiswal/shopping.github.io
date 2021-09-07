import { useState } from "react";

export default function ProductComponent()
{
    const[categories,setCategories]=useState(['All','Electronics','Footwear','Fashion']);
    return(
        <div className="container-fluid">
            <h2>Categories List</h2>
             <ol>
                 {
                     categories.map(category=>
                        <li key={category}>{category}</li>
                        )
                 }

             </ol>
             <h2>Select a Category</h2>
             <select className="form-select w-25">
                 {
                     categories.map(category=>
                        <option key={category}value={category}>{category}</option>
                        )
                 }
             </select>
             <h2>Categories List</h2>
             <table className="table table-hover w-25">
                 <thead>
                     <tr>
                         <th>Choose Category</th>
                     </tr>
                 </thead>
                 <tbody>
                     {
                         categories.map(category=>
                            <tr key={category}>
                                <td>{category}</td>
                            </tr>
                            )
                     }
                 </tbody>
             </table>
          
        </div>
    )
}