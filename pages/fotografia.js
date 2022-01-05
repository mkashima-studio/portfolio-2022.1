import fotografia from './fotografia.module.css'
import Image from 'next/image'

// Images

import food1 from '../public/photos/food/food (1).jpg'
import food2 from '../public/photos/food/food (2).jpg'
import food3 from '../public/photos/food/food (3).jpg'
import food4 from '../public/photos/food/food (4).jpg'
import food5 from '../public/photos/food/food (5).jpg'
import food6 from '../public/photos/food/food (6).jpg'
import food7 from '../public/photos/food/food (7).jpg'
import food8 from '../public/photos/food/food (8).jpg'
import food9 from '../public/photos/food/food (9).jpg'
import food10 from '../public/photos/food/food (10).jpg'

import food11 from '../public/photos/food/food (11).jpg'
import food12 from '../public/photos/food/food (12).jpg'
import food13 from '../public/photos/food/food (13).jpg'
import food14 from '../public/photos/food/food (14).jpg'
import food15 from '../public/photos/food/food (15).jpg'
import food16 from '../public/photos/food/food (16).jpg'
import food17 from '../public/photos/food/food (17).jpg'
import food18 from '../public/photos/food/food (18).jpg'
import food19 from '../public/photos/food/food (19).jpg'
import food20 from '../public/photos/food/food (20).jpg'

import food21 from '../public/photos/food/food (21).jpg'
import food22 from '../public/photos/food/food (22).jpg'
import food23 from '../public/photos/food/food (23).jpg'
import food24 from '../public/photos/food/food (24).jpg'
import food25 from '../public/photos/food/food (25).jpg'
import food26 from '../public/photos/food/food (26).jpg'
import food27 from '../public/photos/food/food (27).jpg'
import food28 from '../public/photos/food/food (28).jpg'
import food29 from '../public/photos/food/food (29).jpg'
import food30 from '../public/photos/food/food (30).jpg'

import food31 from '../public/photos/food/food (31).jpg'
import food32 from '../public/photos/food/food (32).jpg'
import food33 from '../public/photos/food/food (33).jpg'
import food34 from '../public/photos/food/food (34).jpg'
import food35 from '../public/photos/food/food (35).jpg'
import food36 from '../public/photos/food/food (36).jpg'
import food37 from '../public/photos/food/food (37).jpg'
import food38 from '../public/photos/food/food (38).jpg'
import food39 from '../public/photos/food/food (39).jpg'

import ind1 from '../public/photos/ind/ind (1).jpg'
import ind2 from '../public/photos/ind/ind (2).jpg'
import ind3 from '../public/photos/ind/ind (3).jpg'
import ind4 from '../public/photos/ind/ind (4).jpg'
import ind5 from '../public/photos/ind/ind (5).jpg'
import ind6 from '../public/photos/ind/ind (6).jpg'
import ind7 from '../public/photos/ind/ind (7).jpg'
import ind8 from '../public/photos/ind/ind (8).jpg'
import ind9 from '../public/photos/ind/ind (9).jpg'
import ind10 from '../public/photos/ind/ind (10).jpg'

import ind11 from '../public/photos/ind/ind (11).jpg'
import ind12 from '../public/photos/ind/ind (12).jpg'
import ind13 from '../public/photos/ind/ind (13).jpg'
import ind14 from '../public/photos/ind/ind (14).jpg'
import ind15 from '../public/photos/ind/ind (15).jpg'
import ind16 from '../public/photos/ind/ind (16).jpg'
import ind17 from '../public/photos/ind/ind (17).jpg'
import ind18 from '../public/photos/ind/ind (18).jpg'

import port1 from '../public/photos/port/portraits (1).jpg'
import port2 from '../public/photos/port/portraits (3).jpg'




function Fotografia() {
    return <div>
        <h5>mkashima portfolio_2022 •</h5>
        <h6>/ foto / foto / say cheese</h6>
        <h1>FOTOGRAFIA</h1>
        <div className={fotografia.row}>
            <div className={fotografia.column}>
                <Image src={food1} />
                <Image src={food4} />
                <Image src={ind2} />
                <Image src={food7} />
                <Image src={ind5} />
                <Image src={food10} />
                <Image src={food13} />
                <Image src={food16} />
                <Image src={food19} />
                <Image src={ind8} />
                <Image src={food22} />
                <Image src={food25} />
                <Image src={ind11} />
                <Image src={food28} />
                <Image src={food31} />
                <Image src={ind14} />
                <Image src={food34} />
                <Image src={food37} />
                <Image src={ind16} />
                <Image src={food39} />
                <Image src={ind1} />
            </div>
            <div className={fotografia.column}>
                <Image src={food2} />
                <Image src={food5} />
                <Image src={food8} />
                <Image src={food11} />
                <Image src={ind3} />
                <Image src={food14} />
                <Image src={food17} />
                <Image src={ind6} />
                <Image src={food20} />
                <Image src={food23} />
                <Image src={port1} />
                <Image src={ind9} />
                <Image src={food26} />
                <Image src={food29} />
                <Image src={ind12} />
                <Image src={food32} />
                <Image src={food35} />
                <Image src={ind15} />
                <Image src={food38} />
                <Image src={ind17} />
            </div>
            <div className={fotografia.column}>
                <Image src={food3} />
                <Image src={port2} />
                <Image src={food6} />
                <Image src={food9} />
                <Image src={ind4} />
                <Image src={food12} />
                <Image src={food15} />
                <Image src={ind7} />
                <Image src={food18} />
                <Image src={food21} />
                <Image src={ind10} />
                <Image src={food24} />
                <Image src={food27} />
                <Image src={ind13} />
                <Image src={food30} />
                <Image src={food33} />
                <Image src={food36} />
                <Image src={ind18} />
            </div>
        </div>   
    </div>
  }
  
export default Fotografia