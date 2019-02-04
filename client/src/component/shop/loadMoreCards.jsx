import React from 'react'
import CardBlockShop from "../../utils/card_block_shop";

const LodMoreCards = (props) => {
    
    console.log('limit', props.limit);
    console.log('size', props.size);

    return (
        <div>
            <div>
                <CardBlockShop
                    grid={props.grid}
                    list={props.products}
                />
            </div>
               
            <div className="load_more_container">
                <span onClick={() => props.loadMore() }>
                    Load More
                </span>
            </div>

        </div>
    );
}



// return (

//     <div>
//         <div>
//             <CardBlockShop
//                 grid={props.grid}
//                 list={props.products}
//             />
//         </div>
//             {
//                 props.size > 0 && props.size >= props.limit ?
//                 <div className="load_more_container">
//                     <span onClick={() => props.loadMore() }>
//                         Load More
//                     </span>
//                 </div>
//                 :null
//             }
//     </div>
// );
// }
 
export default LodMoreCards;