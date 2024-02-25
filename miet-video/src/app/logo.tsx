'use client';

import { useRouter } from "next/navigation";



const Logo = () => {

    const { push } = useRouter();

    const redirectToHomePage = () => {
        push("/");
    }

    return (
        <button id="logo" className="hide-button" type="button" onClick={redirectToHomePage}>
            <div className="logo-layout main-color main-color-hover main-transition main-logo-font" style={{"fontSize": "2em"}}>
                <svg className="logo-svg-color" version="1.0" xmlns="http://www.w3.org/2000/svg"
                    width="40.000000pt" height="40.000000pt" viewBox="0 0 1024.000000 1024.000000"
                    preserveAspectRatio="xMidYMid meet">

                    <g transform="translate(0.000000,1024.000000) scale(0.100000,-0.100000)"
                    fill="#000000" stroke="none">
                    <path fill="currentColor" d="M4785 10184 c-1130 -91 -2085 -477 -2940 -1188 -154 -129 -472 -447
                    -601 -601 -668 -803 -1052 -1703 -1171 -2747 -14 -119 -18 -236 -18 -528 0
                    -292 4 -409 18 -528 118 -1037 506 -1948 1168 -2742 133 -160 449 -476 609
                    -609 794 -662 1706 -1050 2742 -1168 118 -13 238 -17 523 -18 365 0 464 6 715
                    41 1421 200 2699 1001 3497 2190 99 148 197 306 209 337 6 16 -12 17 -200 17
                    l-206 0 0 526 c0 289 -4 523 -8 520 -5 -3 -184 -245 -398 -539 l-389 -534 -5
                    541 -5 540 -31 -39 c-17 -22 -190 -258 -384 -525 -194 -267 -361 -494 -371
                    -505 -19 -19 -19 0 -19 798 l0 817 -110 0 c-60 0 -110 4 -110 9 0 5 11 56 24
                    113 14 57 30 136 36 176 l12 72 244 0 244 0 2 -520 3 -520 395 541 395 542 5
                    -542 5 -541 395 541 395 542 5 -824 5 -824 135 0 135 0 63 150 c189 443 310
                    923 374 1480 18 150 17 799 0 965 -129 1233 -653 2322 -1522 3163 -818 791
                    -1844 1272 -2991 1403 -138 15 -747 28 -874 18z m-396 -1624 c771 -102 1456
                    -441 2006 -994 174 -175 293 -316 414 -496 313 -463 498 -946 576 -1511 31
                    -223 30 -686 -2 -891 l-6 -38 -238 0 c-132 0 -239 3 -239 6 0 3 8 60 17 127
                    21 153 23 525 4 682 -85 714 -393 1338 -902 1831 -480 464 -1097 750 -1774
                    824 -145 16 -487 13 -640 -5 -318 -37 -613 -118 -898 -247 -109 -49 -290 -146
                    -346 -185 -3 -2 178 -297 230 -376 4 -6 45 12 96 41 265 152 578 259 898 308
                    150 23 541 26 680 5 292 -43 547 -121 790 -240 262 -129 476 -281 681 -486
                    388 -387 629 -861 721 -1420 26 -159 26 -593 -1 -752 l-18 -113 -439 0 -439 0
                    -2 731 -3 731 -395 -542 -395 -541 -5 543 -5 543 -395 -541 -395 -542 -5 942
                    -5 941 -256 -405 c-140 -223 -385 -612 -545 -864 l-289 -459 -5 862 -5 863
                    -916 -1443 -916 -1442 24 -61 c14 -34 54 -121 89 -195 55 -115 66 -133 78
                    -120 8 8 294 453 636 989 342 536 627 981 634 989 8 11 12 -192 16 -798 l5
                    -813 540 857 540 857 5 -864 5 -863 395 542 c217 298 398 543 402 543 4 0 9
                    -242 10 -537 l3 -537 388 532 c213 292 392 534 397 537 7 4 10 -146 10 -414
                    l0 -421 560 0 c308 0 560 -2 560 -4 0 -2 -13 -34 -29 -72 -130 -313 -315 -589
                    -556 -829 -397 -397 -889 -640 -1470 -726 -137 -21 -531 -18 -675 4 -319 49
                    -616 149 -883 298 -60 33 -110 59 -111 57 -35 -52 -236 -381 -234 -383 69 -48
                    326 -178 452 -229 213 -86 458 -152 711 -192 137 -22 538 -30 702 -15 941 88
                    1789 623 2283 1441 87 143 185 349 245 513 l50 137 244 0 243 0 -6 -34 c-4
                    -19 -26 -93 -50 -163 -137 -408 -334 -767 -604 -1103 -111 -137 -376 -400
                    -524 -517 -462 -369 -1015 -618 -1583 -712 -230 -38 -319 -45 -580 -45 -271 0
                    -420 13 -645 55 -547 104 -1038 328 -1500 685 -142 110 -447 412 -564 559
                    -414 520 -668 1135 -741 1800 -19 164 -21 529 -5 690 66 676 324 1312 746
                    1840 103 129 322 356 449 465 539 462 1213 753 1900 820 61 5 128 12 150 14
                    103 10 507 -4 654 -24z"/>
                    </g>
                    </svg>
                <h1>MIET Video</h1>
            </div>
        </button>
    );
}

export default Logo;