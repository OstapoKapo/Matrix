let diode_color = 'orange';
 let diodeColor = 'orange'
let clear_color = 'white';
let h_c = 'red';
add.onclick = () => {
    let str = inp.value;
    inp.value = '';
    let i = 0;
    let a =0
    let timerId = setInterval(function() {
        if(i<str.length) {
            switch (str[i]) {
                case 'а':
                    clear();
                diode6_2.style.backgroundColor = diode_color;
                diode5_2.style.backgroundColor = diode_color;
                diode4_2.style.backgroundColor = diode_color;
                diode3_2.style.backgroundColor = diode_color;
                diode2_3.style.backgroundColor = diode_color;
                diode3_4.style.backgroundColor = diode_color;
                diode4_4.style.backgroundColor = diode_color;
                diode5_4.style.backgroundColor = diode_color;
                diode6_4.style.backgroundColor = diode_color;
                diode4_3.style.backgroundColor = diode_color;
                break;

                case 'б':
                    clear();
                diode1_1.style.backgroundColor = diode_color;
                diode1_2.style.backgroundColor = diode_color;
                diode1_3.style.backgroundColor = diode_color;
                diode1_4.style.backgroundColor = diode_color;
                diode1_5.style.backgroundColor = diode_color;
                diode2_1.style.backgroundColor = diode_color;
                diode3_1.style.backgroundColor = diode_color;
                diode4_1.style.backgroundColor = diode_color;
                diode4_2.style.backgroundColor = diode_color;
                diode4_3.style.backgroundColor = diode_color;
                diode4_4.style.backgroundColor = diode_color;
                diode4_5.style.backgroundColor = diode_color;
                diode5_1.style.backgroundColor = diode_color;
                diode5_5.style.backgroundColor = diode_color;
                diode6_1.style.backgroundColor = diode_color;
                diode6_5.style.backgroundColor = diode_color;
                diode7_1.style.backgroundColor = diode_color;
                diode7_2.style.backgroundColor = diode_color;
                diode7_3.style.backgroundColor = diode_color;
                diode7_4.style.backgroundColor = diode_color;
                diode7_5.style.backgroundColor = diode_color;


                break;

                case 'в':
                    clear();
                diode1_1.style.backgroundColor = diode_color;
                diode1_2.style.backgroundColor = diode_color;
                diode1_3.style.backgroundColor = diode_color;
                diode1_4.style.backgroundColor = diode_color;
                diode2_1.style.backgroundColor = diode_color;
                diode2_5.style.backgroundColor = diode_color;
                diode3_1.style.backgroundColor = diode_color;
                diode3_5.style.backgroundColor = diode_color;
                diode4_1.style.backgroundColor = diode_color;
                diode4_2.style.backgroundColor = diode_color;
                diode4_3.style.backgroundColor = diode_color;
                diode4_4.style.backgroundColor = diode_color;
                diode5_1.style.backgroundColor = diode_color;
                diode5_5.style.backgroundColor = diode_color;
                diode6_1.style.backgroundColor = diode_color;
                diode6_5.style.backgroundColor = diode_color;
                diode7_1.style.backgroundColor = diode_color;
                diode7_2.style.backgroundColor = diode_color;
                diode7_3.style.backgroundColor = diode_color;
                diode7_4.style.backgroundColor = diode_color;
                break;

                case 'г':
                    clear();
                diode1_1.style.backgroundColor = diode_color;
                diode1_2.style.backgroundColor = diode_color;
                diode1_3.style.backgroundColor = diode_color;
                diode1_4.style.backgroundColor = diode_color;
                diode1_5.style.backgroundColor = diode_color;
                diode2_1.style.backgroundColor = diode_color;
                diode3_1.style.backgroundColor = diode_color;
                diode4_1.style.backgroundColor = diode_color;
                diode5_1.style.backgroundColor = diode_color;
                diode6_1.style.backgroundColor = diode_color;
                diode7_1.style.backgroundColor = diode_color;
                break;

                case 'д':
                    clear();
                diode2_2.style.backgroundColor = diode_color;
                diode2_3.style.backgroundColor = diode_color;
                diode2_4.style.backgroundColor = diode_color;
                diode3_2.style.backgroundColor = diode_color;
                diode3_4.style.backgroundColor = diode_color;
                diode4_2.style.backgroundColor = diode_color;
                diode4_4.style.backgroundColor = diode_color;
                diode5_2.style.backgroundColor = diode_color;
                diode5_4.style.backgroundColor = diode_color;
                diode6_1.style.backgroundColor = diode_color;
                diode6_2.style.backgroundColor = diode_color;
                diode6_3.style.backgroundColor = diode_color;
                diode6_4.style.backgroundColor = diode_color;
                diode6_5.style.backgroundColor = diode_color;
                diode7_1.style.backgroundColor = diode_color;
                diode7_5.style.backgroundColor = diode_color;
                break;

                case 'е':
                    clear();
                diode1_1.style.backgroundColor = diode_color;
                diode1_2.style.backgroundColor = diode_color;
                diode1_3.style.backgroundColor = diode_color;
                diode1_4.style.backgroundColor = diode_color;
                diode1_5.style.backgroundColor = diode_color;
                diode2_1.style.backgroundColor = diode_color;
                diode3_1.style.backgroundColor = diode_color;
                diode4_1.style.backgroundColor = diode_color;
                diode4_2.style.backgroundColor = diode_color;
                diode4_3.style.backgroundColor = diode_color;
                diode4_4.style.backgroundColor = diode_color;
                diode4_5.style.backgroundColor = diode_color;
                diode5_1.style.backgroundColor = diode_color;
                diode6_1.style.backgroundColor = diode_color;
                diode7_1.style.backgroundColor = diode_color;
                diode7_2.style.backgroundColor = diode_color;
                diode7_3.style.backgroundColor = diode_color;
                diode7_4.style.backgroundColor = diode_color;
                diode7_5.style.backgroundColor = diode_color;
                break;

                case 'є':
                    clear();
                diode1_3.style.backgroundColor = diode_color;
                diode1_4.style.backgroundColor = diode_color;
                diode1_5.style.backgroundColor = diode_color;
                diode2_2.style.backgroundColor = diode_color;
                diode3_1.style.backgroundColor = diode_color;
                diode4_1.style.backgroundColor = diode_color;
                diode4_2.style.backgroundColor = diode_color;
                diode4_3.style.backgroundColor = diode_color;
                diode4_4.style.backgroundColor = diode_color;
                diode4_5.style.backgroundColor = diode_color;
                diode4_4.style.backgroundColor = diode_color;
                diode5_1.style.backgroundColor = diode_color;
                diode6_2.style.backgroundColor = diode_color;
                diode7_3.style.backgroundColor = diode_color;
                diode7_4.style.backgroundColor = diode_color;
                diode7_5.style.backgroundColor = diode_color;
                break;

                case 'ж':
                    clear();
                diode1_3.style.backgroundColor = diode_color;
                diode2_1.style.backgroundColor = diode_color;
                diode2_3.style.backgroundColor = diode_color;
                diode2_5.style.backgroundColor = diode_color;
                diode3_2.style.backgroundColor = diode_color;
                diode3_3.style.backgroundColor = diode_color;
                diode3_4.style.backgroundColor = diode_color;
                diode4_3.style.backgroundColor = diode_color;
                diode5_2.style.backgroundColor = diode_color;
                diode5_3.style.backgroundColor = diode_color;
                diode5_4.style.backgroundColor = diode_color;
                diode6_1.style.backgroundColor = diode_color;
                diode6_3.style.backgroundColor = diode_color;
                diode6_5.style.backgroundColor = diode_color;
                diode7_3.style.backgroundColor = diode_color;
                break;

                case 'з':
                    clear();
                diode1_1.style.backgroundColor = diode_color;
                diode1_2.style.backgroundColor = diode_color;
                diode1_3.style.backgroundColor = diode_color;
                diode1_4.style.backgroundColor = diode_color;
                diode2_5.style.backgroundColor = diode_color;
                diode3_5.style.backgroundColor = diode_color;
                diode4_1.style.backgroundColor = diode_color;
                diode4_2.style.backgroundColor = diode_color;
                diode4_3.style.backgroundColor = diode_color;
                diode4_4.style.backgroundColor = diode_color;
                diode5_5.style.backgroundColor = diode_color;
                diode6_5.style.backgroundColor = diode_color;
                diode7_1.style.backgroundColor = diode_color;
                diode7_2.style.backgroundColor = diode_color;
                diode7_3.style.backgroundColor = diode_color;
                diode7_4.style.backgroundColor = diode_color;
                break;


                case 'и':
                    clear();
                diode2_1.style.backgroundColor = diode_color;
                diode3_1.style.backgroundColor = diode_color;
                diode4_1.style.backgroundColor = diode_color;
                diode5_1.style.backgroundColor = diode_color;
                diode6_1.style.backgroundColor = diode_color;
                diode2_5.style.backgroundColor = diode_color;
                diode3_4.style.backgroundColor = diode_color;
                diode3_5.style.backgroundColor = diode_color;
                diode4_3.style.backgroundColor = diode_color;
                diode4_5.style.backgroundColor = diode_color;
                diode5_2.style.backgroundColor = diode_color;
                diode5_5.style.backgroundColor = diode_color;
                diode6_5.style.backgroundColor = diode_color;
                break;
                case 'a':
                    clear();
                diode6_2.style.backgroundColor = diode_color;
                diode5_2.style.backgroundColor = diode_color;
                diode4_2.style.backgroundColor = diode_color;
                diode3_2.style.backgroundColor = diode_color;
                diode2_3.style.backgroundColor = diode_color;
                diode3_4.style.backgroundColor = diode_color;
                diode4_4.style.backgroundColor = diode_color;
                diode5_4.style.backgroundColor = diode_color;
                diode6_4.style.backgroundColor = diode_color;
                diode4_3.style.backgroundColor = diode_color;
                break;

                case 'b':
                    clear();
                diode6_2.style.backgroundColor = diode_color;
                diode5_2.style.backgroundColor = diode_color;
                diode4_2.style.backgroundColor = diode_color;
                diode3_2.style.backgroundColor = diode_color;
                diode2_2.style.backgroundColor = diode_color;
                diode4_3.style.backgroundColor = diode_color;
                diode2_3.style.backgroundColor = diode_color;
                diode6_3.style.backgroundColor = diode_color;
                diode3_4.style.backgroundColor = diode_color;
                diode5_4.style.backgroundColor = diode_color;
                break;
                
                case 'u':
                    clear();

                    diode2_1.style.backgroundColor = diode_color;
                    diode3_1.style.backgroundColor = diode_color;
                    diode4_1.style.backgroundColor = diode_color;
                    diode5_1.style.backgroundColor = diode_color;
                    diode6_2.style.backgroundColor = diode_color;
                    diode6_3.style.backgroundColor = diode_color;
                    diode6_4.style.backgroundColor = diode_color;
                    diode5_5.style.backgroundColor = diode_color;
                    diode4_5.style.backgroundColor = diode_color;
                    diode3_5.style.backgroundColor = diode_color;
                    diode2_5.style.backgroundColor = diode_color;
break;
                    case 'v':
                        clear();

                    diode2_1.style.backgroundColor = diode_color;
                    diode3_1.style.backgroundColor = diode_color;
                    diode4_1.style.backgroundColor = diode_color;
                    diode5_2.style.backgroundColor = diode_color;
                    diode6_3.style.backgroundColor = diode_color;
                    diode5_4.style.backgroundColor = diode_color;
                    diode4_5.style.backgroundColor = diode_color;
                    diode4_5.style.backgroundColor = diode_color;
                    diode3_5.style.backgroundColor = diode_color;
                    diode2_5.style.backgroundColor = diode_color;
                    break;
                    case 'w':
                        clear();

                    diode2_1.style.backgroundColor = diode_color;
                    diode3_1.style.backgroundColor = diode_color;
                    diode4_1.style.backgroundColor = diode_color;
                    diode5_1.style.backgroundColor = diode_color;
                    diode6_2.style.backgroundColor = diode_color;
                    diode5_3.style.backgroundColor = diode_color;
                    diode6_4.style.backgroundColor = diode_color;
                    diode5_5.style.backgroundColor = diode_color;
                    diode4_5.style.backgroundColor = diode_color;
                    diode3_5.style.backgroundColor = diode_color;
                    diode2_5.style.backgroundColor = diode_color;

                    break;
                    case 'x':
                        clear();

                    diode2_1.style.backgroundColor = diode_color;
                    diode3_2.style.backgroundColor = diode_color;
                    diode4_3.style.backgroundColor = diode_color;
                    diode5_2.style.backgroundColor = diode_color;
                    diode6_1.style.backgroundColor = diode_color;
                    diode6_5.style.backgroundColor = diode_color;
                    diode5_4.style.backgroundColor = diode_color;
                    diode4_3.style.backgroundColor = diode_color;
                    diode3_4.style.backgroundColor = diode_color;
                    diode2_5.style.backgroundColor = diode_color;

                    break;
                    case 'y':
                        clear();

                    diode2_1.style.backgroundColor = diode_color;
                    diode3_2.style.backgroundColor = diode_color;
                    diode4_3.style.backgroundColor = diode_color;
                    diode5_3.style.backgroundColor = diode_color;
                    diode6_3.style.backgroundColor = diode_color;
                    diode3_4.style.backgroundColor = diode_color;
                    diode2_5.style.backgroundColor = diode_color;
                    

                    break;
                    case 'z':
                        clear();

                    diode2_1.style.backgroundColor = diode_color;
                    diode2_2.style.backgroundColor = diode_color;
                    diode2_3.style.backgroundColor = diode_color;
                    diode2_4.style.backgroundColor = diode_color;
                    diode2_5.style.backgroundColor = diode_color;
                    diode3_4.style.backgroundColor = diode_color;
                    diode4_3.style.backgroundColor = diode_color;
                    diode5_2.style.backgroundColor = diode_color;
                    diode6_1.style.backgroundColor = diode_color;
                    diode6_2.style.backgroundColor = diode_color;
                    diode6_3.style.backgroundColor = diode_color;
                    diode6_4.style.backgroundColor = diode_color;
                    diode6_5.style.backgroundColor = diode_color;


                    break;
                    case '/':
                        clear();

                    diode2_2.style.backgroundColor = h_c;
                    diode3_1.style.backgroundColor = h_c;
                    diode4_1.style.backgroundColor = h_c;
                    diode5_2.style.backgroundColor = h_c;
                    diode6_3.style.backgroundColor = h_c;
                    diode5_4.style.backgroundColor = h_c;
                    diode4_5.style.backgroundColor = h_c;
                    diode3_5.style.backgroundColor = h_c;
                    diode2_4.style.backgroundColor = h_c;
                    diode3_3.style.backgroundColor = h_c;
                    diode3_2.style.backgroundColor = h_c;
                    diode3_4.style.backgroundColor = h_c;
                    diode4_2.style.backgroundColor = h_c;
                    diode4_3.style.backgroundColor = h_c;
                    diode4_4.style.backgroundColor = h_c;
                    diode5_3.style.backgroundColor = h_c;
                    



                    break;




case 'a':


                case 'і':
                    clear();
                diode1_3.style.backgroundColor = diode_color;
                diode3_3.style.backgroundColor = diode_color;
                diode4_3.style.backgroundColor = diode_color;
                diode5_3.style.backgroundColor = diode_color;
                diode6_3.style.backgroundColor = diode_color;
                diode7_3.style.backgroundColor = diode_color;
                break;

                case 'й':
                    clear();
                    diode1_2.style.backgroundColor = diode_color;
                    diode1_3.style.backgroundColor = diode_color;
                    diode1_4.style.backgroundColor = diode_color;
                diode3_1.style.backgroundColor = diode_color;
                diode4_1.style.backgroundColor = diode_color;
                diode5_1.style.backgroundColor = diode_color;
                diode6_1.style.backgroundColor = diode_color;
                diode7_1.style.backgroundColor = diode_color;
                diode3_5.style.backgroundColor = diode_color;
                diode4_4.style.backgroundColor = diode_color;
                diode4_5.style.backgroundColor = diode_color;
                diode5_3.style.backgroundColor = diode_color;
                diode5_5.style.backgroundColor = diode_color;
                diode6_2.style.backgroundColor = diode_color;
                diode6_5.style.backgroundColor = diode_color;
                diode7_5.style.backgroundColor = diode_color;
                break;

                case 'ї':
                    clear();
                diode1_2.style.backgroundColor = diode_color;
                diode1_4.style.backgroundColor = diode_color;
                diode3_3.style.backgroundColor = diode_color;
                diode4_3.style.backgroundColor = diode_color;
                diode5_3.style.backgroundColor = diode_color;
                diode6_3.style.backgroundColor = diode_color;
                diode7_3.style.backgroundColor = diode_color;
                break;


                case 'к':
                    clear();
                diode1_1.style.backgroundColor = diode_color;
                diode1_4.style.backgroundColor = diode_color;
                diode2_1.style.backgroundColor = diode_color;
                diode2_3.style.backgroundColor = diode_color;
                diode3_1.style.backgroundColor = diode_color;
                diode3_2.style.backgroundColor = diode_color;
                diode4_1.style.backgroundColor = diode_color;
                diode5_1.style.backgroundColor = diode_color;
                diode5_2.style.backgroundColor = diode_color;
                diode6_1.style.backgroundColor = diode_color;
                diode6_3.style.backgroundColor = diode_color;
                diode7_1.style.backgroundColor = diode_color;
                diode7_4.style.backgroundColor = diode_color;
                break;

                case 'л':
                    clear();
                diode1_2.style.backgroundColor = diode_color;
                diode1_3.style.backgroundColor = diode_color;
                diode1_4.style.backgroundColor = diode_color;
                diode1_5.style.backgroundColor = diode_color;
                diode2_2.style.backgroundColor = diode_color;
                diode2_5.style.backgroundColor = diode_color;
                diode3_2.style.backgroundColor = diode_color;
                diode3_5.style.backgroundColor = diode_color;
                diode4_2.style.backgroundColor = diode_color;
                diode4_5.style.backgroundColor = diode_color;
                diode5_2.style.backgroundColor = diode_color;
                diode5_5.style.backgroundColor = diode_color;
                diode6_2.style.backgroundColor = diode_color;
                diode6_5.style.backgroundColor = diode_color;
                diode7_1.style.backgroundColor = diode_color;
                diode7_2.style.backgroundColor = diode_color;
                diode7_5.style.backgroundColor = diode_color;

                break;

                case 'м':
                    clear();
                diode1_1.style.backgroundColor = diode_color;
                diode1_5.style.backgroundColor = diode_color;
                diode2_1.style.backgroundColor = diode_color;
                diode3_1.style.backgroundColor = diode_color;
                diode4_1.style.backgroundColor = diode_color;
                diode5_1.style.backgroundColor = diode_color;
                diode6_1.style.backgroundColor = diode_color;
                diode7_1.style.backgroundColor = diode_color;
                diode2_2.style.backgroundColor = diode_color;
                diode2_4.style.backgroundColor = diode_color;
                diode2_5.style.backgroundColor = diode_color;
                diode3_3.style.backgroundColor = diode_color;
                diode3_5.style.backgroundColor = diode_color;
                diode4_5.style.backgroundColor = diode_color;
                diode5_5.style.backgroundColor = diode_color;
                diode6_5.style.backgroundColor = diode_color;
                diode7_5.style.backgroundColor = diode_color;
                break;

                case 'н':
                    clear();
                diode1_1.style.backgroundColor = diode_color;
                diode1_5.style.backgroundColor = diode_color;
                diode2_1.style.backgroundColor = diode_color;
                diode3_1.style.backgroundColor = diode_color;
                diode4_1.style.backgroundColor = diode_color;
                diode5_1.style.backgroundColor = diode_color;
                diode6_1.style.backgroundColor = diode_color;
                diode7_1.style.backgroundColor = diode_color;
                diode2_5.style.backgroundColor = diode_color;
                diode3_5.style.backgroundColor = diode_color;
                diode4_2.style.backgroundColor = diode_color;
                diode4_3.style.backgroundColor = diode_color;
                diode4_4.style.backgroundColor = diode_color;
                diode4_5.style.backgroundColor = diode_color;
                diode5_5.style.backgroundColor = diode_color;
                diode6_5.style.backgroundColor = diode_color;
                diode7_5.style.backgroundColor = diode_color;
                break;

                case 'о':
                    clear();
                diode1_2.style.backgroundColor = diode_color;
                diode1_4.style.backgroundColor = diode_color;
                diode1_3.style.backgroundColor = diode_color;
                diode2_1.style.backgroundColor = diode_color;
                diode2_5.style.backgroundColor = diode_color;
                diode3_1.style.backgroundColor = diode_color;
                diode3_5.style.backgroundColor = diode_color;
                diode4_1.style.backgroundColor = diode_color;
                diode4_5.style.backgroundColor = diode_color;
                diode5_1.style.backgroundColor = diode_color;
                diode5_5.style.backgroundColor = diode_color;
                diode6_1.style.backgroundColor = diode_color;
                diode6_5.style.backgroundColor = diode_color;
                diode7_2.style.backgroundColor = diode_color;
                diode7_3.style.backgroundColor = diode_color;
                diode7_4.style.backgroundColor = diode_color;
                break;

                case 'п':
                    clear();
                diode1_1.style.backgroundColor = diode_color;
                diode1_2.style.backgroundColor = diode_color;
                diode1_3.style.backgroundColor = diode_color;
                diode1_4.style.backgroundColor = diode_color;
                diode1_5.style.backgroundColor = diode_color;
                diode2_1.style.backgroundColor = diode_color;
                diode2_5.style.backgroundColor = diode_color;
                diode3_1.style.backgroundColor = diode_color;
                diode3_5.style.backgroundColor = diode_color;
                diode4_1.style.backgroundColor = diode_color;
                diode4_5.style.backgroundColor = diode_color;
                diode5_1.style.backgroundColor = diode_color;
                diode5_5.style.backgroundColor = diode_color;
                diode6_1.style.backgroundColor = diode_color;
                diode6_5.style.backgroundColor = diode_color;
                diode7_1.style.backgroundColor = diode_color;
                diode7_5.style.backgroundColor = diode_color;
                break;



                case 'р':
                    clear();
                diode1_1.style.backgroundColor = diode_color;
                diode1_2.style.backgroundColor = diode_color;
                diode1_3.style.backgroundColor = diode_color;
                diode1_4.style.backgroundColor = diode_color;
                diode2_1.style.backgroundColor = diode_color;
                diode2_5.style.backgroundColor = diode_color;
                diode3_1.style.backgroundColor = diode_color;
                diode3_5.style.backgroundColor = diode_color;
                diode4_1.style.backgroundColor = diode_color;
                diode4_2.style.backgroundColor = diode_color;
                diode4_3.style.backgroundColor = diode_color;
                diode4_4.style.backgroundColor = diode_color;
                diode5_1.style.backgroundColor = diode_color;
                diode6_1.style.backgroundColor = diode_color;
                diode7_1.style.backgroundColor = diode_color;
                break;

            
                case 'с':
                    clear();
                diode1_3.style.backgroundColor = diode_color;
                diode1_4.style.backgroundColor = diode_color;
                diode1_5.style.backgroundColor = diode_color;
                diode2_2.style.backgroundColor = diode_color;
                diode3_1.style.backgroundColor = diode_color;
                diode4_1.style.backgroundColor = diode_color;
                diode5_1.style.backgroundColor = diode_color;
                diode6_2.style.backgroundColor = diode_color;
                diode7_3.style.backgroundColor = diode_color;
                diode7_4.style.backgroundColor = diode_color;
                diode7_5.style.backgroundColor = diode_color;
                break;

                case 'у':
                clear();
                diode2_1.style.backgroundColor = diode_color;
                diode3_2.style.backgroundColor = diode_color;
                diode4_3.style.backgroundColor = diode_color;
                diode5_3.style.backgroundColor = diode_color;
                diode6_3.style.backgroundColor = diode_color;
                diode3_4.style.backgroundColor = diode_color;
                diode2_5.style.backgroundColor = diode_color;
                break;


                case 'ф':
                    clear();
                diode1_2.style.backgroundColor = diode_color;
                diode1_3.style.backgroundColor = diode_color;
                diode1_4.style.backgroundColor = diode_color;
                diode2_1.style.backgroundColor = diode_color;
                diode2_3.style.backgroundColor = diode_color;
                diode2_5.style.backgroundColor = diode_color;
                diode3_1.style.backgroundColor = diode_color;
                diode3_3.style.backgroundColor = diode_color;
                diode3_5.style.backgroundColor = diode_color;
                diode4_2.style.backgroundColor = diode_color;
                diode4_3.style.backgroundColor = diode_color;
                diode4_4.style.backgroundColor = diode_color;
                diode5_3.style.backgroundColor = diode_color;
                diode6_3.style.backgroundColor = diode_color;
                diode7_3.style.backgroundColor = diode_color;

                break;



                case 'х':
                        clear();
                    diode2_1.style.backgroundColor = diode_color;
                    diode3_2.style.backgroundColor = diode_color;
                    diode4_3.style.backgroundColor = diode_color;
                    diode5_2.style.backgroundColor = diode_color;
                    diode6_1.style.backgroundColor = diode_color;
                    diode6_5.style.backgroundColor = diode_color;
                    diode5_4.style.backgroundColor = diode_color;
                    diode4_3.style.backgroundColor = diode_color;
                    diode3_4.style.backgroundColor = diode_color;
                    diode2_5.style.backgroundColor = diode_color;
                    break;


                    case 'ц':
                    clear();
                diode1_1.style.backgroundColor = diode_color;
                diode1_4.style.backgroundColor = diode_color;
                diode2_1.style.backgroundColor = diode_color;
                diode3_1.style.backgroundColor = diode_color;
                diode4_1.style.backgroundColor = diode_color;
                diode5_1.style.backgroundColor = diode_color;
                diode6_1.style.backgroundColor = diode_color;
                diode2_4.style.backgroundColor = diode_color;
                diode3_4.style.backgroundColor = diode_color;
                diode4_4.style.backgroundColor = diode_color;
                diode5_4.style.backgroundColor = diode_color;
                diode6_2.style.backgroundColor = diode_color;
                diode6_3.style.backgroundColor = diode_color;
                diode6_4.style.backgroundColor = diode_color;
                diode6_5.style.backgroundColor = diode_color;
                diode7_5.style.backgroundColor = diode_color;
                break;


                case 'ч':
                    clear();
                diode1_1.style.backgroundColor = diode_color;
                diode1_5.style.backgroundColor = diode_color;
                diode2_1.style.backgroundColor = diode_color;
                diode3_1.style.backgroundColor = diode_color;
                diode2_5.style.backgroundColor = diode_color;
                diode3_5.style.backgroundColor = diode_color;
                diode4_2.style.backgroundColor = diode_color;
                diode4_3.style.backgroundColor = diode_color;
                diode4_4.style.backgroundColor = diode_color;
                diode4_5.style.backgroundColor = diode_color;
                diode5_5.style.backgroundColor = diode_color;
                diode6_5.style.backgroundColor = diode_color;
                diode7_5.style.backgroundColor = diode_color;
                break;

                case 'ш':
                    clear();
                diode1_1.style.backgroundColor = diode_color;
                diode1_3.style.backgroundColor = diode_color;
                diode1_5.style.backgroundColor = diode_color;
                diode2_1.style.backgroundColor = diode_color;
                diode2_3.style.backgroundColor = diode_color;
                diode2_5.style.backgroundColor = diode_color;
                diode3_1.style.backgroundColor = diode_color;
                diode3_3.style.backgroundColor = diode_color;
                diode3_5.style.backgroundColor = diode_color;
                diode4_1.style.backgroundColor = diode_color;
                diode4_3.style.backgroundColor = diode_color;
                diode4_5.style.backgroundColor = diode_color;
                diode5_1.style.backgroundColor = diode_color;
                diode5_3.style.backgroundColor = diode_color;
                diode5_5.style.backgroundColor = diode_color;
                diode6_1.style.backgroundColor = diode_color;
                diode6_3.style.backgroundColor = diode_color;
                diode6_5.style.backgroundColor = diode_color;
                diode7_1.style.backgroundColor = diode_color;
                diode7_2.style.backgroundColor = diode_color;
                diode7_3.style.backgroundColor = diode_color;
                diode7_4.style.backgroundColor = diode_color;
                diode7_5.style.backgroundColor = diode_color;
                break;

                case 'щ':
                    clear();
                diode1_1.style.backgroundColor = diode_color;
                diode1_3.style.backgroundColor = diode_color;
                diode1_5.style.backgroundColor = diode_color;
                diode2_1.style.backgroundColor = diode_color;
                diode2_3.style.backgroundColor = diode_color;
                diode2_5.style.backgroundColor = diode_color;
                diode3_1.style.backgroundColor = diode_color;
                diode3_3.style.backgroundColor = diode_color;
                diode3_5.style.backgroundColor = diode_color;
                diode4_1.style.backgroundColor = diode_color;
                diode4_3.style.backgroundColor = diode_color;
                diode4_5.style.backgroundColor = diode_color;
                diode5_1.style.backgroundColor = diode_color;
                diode5_3.style.backgroundColor = diode_color;
                diode5_5.style.backgroundColor = diode_color;
                diode6_1.style.backgroundColor = diode_color;
                diode6_3.style.backgroundColor = diode_color;
                diode6_5.style.backgroundColor = diode_color;
                diode6_2.style.backgroundColor = diode_color;
                diode6_4.style.backgroundColor = diode_color;
                diode7_5.style.backgroundColor = diode_color;
                break;



                case 'т':
                    clear();
                   diode1_1.style.backgroundColor = diode_color;
                   diode1_2.style.backgroundColor = diode_color;
                   diode1_3.style.backgroundColor = diode_color;
                   diode1_4.style.backgroundColor = diode_color;
                   diode1_5.style.backgroundColor = diode_color;
                   diode2_3.style.backgroundColor = diode_color;
                   diode3_3.style.backgroundColor = diode_color;
                   diode4_3.style.backgroundColor = diode_color;
                   diode5_3.style.backgroundColor = diode_color;
                   diode6_3.style.backgroundColor = diode_color;
                   diode7_3.style.backgroundColor = diode_color;
                   break;

                   case 'ь':
                    clear();
                   diode1_1.style.backgroundColor = diode_color;
                   diode2_1.style.backgroundColor = diode_color;
                   diode3_1.style.backgroundColor = diode_color;
                   diode4_1.style.backgroundColor = diode_color;
                   diode5_1.style.backgroundColor = diode_color;
                   diode6_1.style.backgroundColor = diode_color;
                   diode7_1.style.backgroundColor = diode_color;
                   diode5_2.style.backgroundColor = diode_color;
                   diode5_3.style.backgroundColor = diode_color;
                   diode5_4.style.backgroundColor = diode_color;
                   diode5_5.style.backgroundColor = diode_color;
                   diode6_5.style.backgroundColor = diode_color;
                   diode7_2.style.backgroundColor = diode_color;
                   diode7_3.style.backgroundColor = diode_color;
                   diode7_4.style.backgroundColor = diode_color;
                   diode7_5.style.backgroundColor = diode_color;
                   break;

                   case 'ю':
                    clear();
                   diode1_1.style.backgroundColor = diode_color;
                   diode2_1.style.backgroundColor = diode_color;
                   diode3_1.style.backgroundColor = diode_color;
                   diode4_1.style.backgroundColor = diode_color;
                   diode5_1.style.backgroundColor = diode_color;
                   diode6_1.style.backgroundColor = diode_color;
                   diode7_1.style.backgroundColor = diode_color;
                   diode4_2.style.backgroundColor = diode_color;
                   diode4_3.style.backgroundColor = diode_color;
                   diode3_3.style.backgroundColor = diode_color;
                   diode2_3.style.backgroundColor = diode_color;
                   diode1_4.style.backgroundColor = diode_color;
                   diode2_5.style.backgroundColor = diode_color;
                   diode3_5.style.backgroundColor = diode_color;
                   diode4_5.style.backgroundColor = diode_color;
                   diode6_3.style.backgroundColor = diode_color;
                   diode5_3.style.backgroundColor = diode_color;
                   diode5_5.style.backgroundColor = diode_color;
                   diode6_5.style.backgroundColor = diode_color;
                   diode7_4.style.backgroundColor = diode_color;
                   break;

                   case 'я':
                    clear();
                   diode1_3.style.backgroundColor = diode_color;
                   diode1_4.style.backgroundColor = diode_color;
                   diode1_5.style.backgroundColor = diode_color;
                   diode2_2.style.backgroundColor = diode_color;
                   diode2_5.style.backgroundColor = diode_color;
                   diode3_3.style.backgroundColor = diode_color;
                   diode3_4.style.backgroundColor = diode_color;
                   diode3_5.style.backgroundColor = diode_color;
                   diode4_4.style.backgroundColor = diode_color;
                   diode4_5.style.backgroundColor = diode_color;
                   diode5_3.style.backgroundColor = diode_color;
                   diode5_5.style.backgroundColor = diode_color;
                   diode6_2.style.backgroundColor = diode_color;
                   diode6_5.style.backgroundColor = diode_color;
                   diode7_2.style.backgroundColor = diode_color;
                   diode7_5.style.backgroundColor = diode_color;
                   break;






            
           

           
       

        case 'b':
            clear();
        diode6_2.style.backgroundColor =  red;
        diode5_2.style.backgroundColor =  red;
        diode4_2.style.backgroundColor =  red;
        diode3_2.style.backgroundColor =  red;
        diode2_2.style.backgroundColor =  red;
        diode4_3.style.backgroundColor =  red;
        diode2_3.style.backgroundColor =  red;
        diode6_3.style.backgroundColor =  red;
        diode3_4.style.backgroundColor =  red;
        diode5_4.style.backgroundColor =  red;
        break;
        
        case 'u':
            clear();

            diode2_1.style.backgroundColor =  red;
            diode3_1.style.backgroundColor =  red;
            diode4_1.style.backgroundColor =  red ;
            diode5_1.style.backgroundColor =  red;
            diode6_2.style.backgroundColor =  red;
            diode6_3.style.backgroundColor =  red;
            diode6_4.style.backgroundColor =  red;
            diode5_5.style.backgroundColor =  red;
            diode4_5.style.backgroundColor =  red;
            diode3_5.style.backgroundColor =  red;
            diode2_5.style.backgroundColor =  red;
break;
            case 'v':
                clear();

            diode2_1.style.backgroundColor =  red;
            diode3_1.style.backgroundColor =  red;
            diode4_1.style.backgroundColor =  red;
            diode5_2.style.backgroundColor =  red;
            diode6_3.style.backgroundColor =  red;
            diode5_4.style.backgroundColor =  red;
            diode4_5.style.backgroundColor =  red;
            diode4_5.style.backgroundColor =  red;
            diode3_5.style.backgroundColor =  red;
            diode2_5.style.backgroundColor =  red;
            break;
            case 'w':
                clear();

            diode2_1.style.backgroundColor =  red;
            diode3_1.style.backgroundColor =  red;
            diode4_1.style.backgroundColor =  red;
            diode5_1.style.backgroundColor =  red;
            diode6_2.style.backgroundColor =  red;
            diode5_3.style.backgroundColor =  red;
            diode6_4.style.backgroundColor =  red;
            diode5_5.style.backgroundColor =  red ;
            diode4_5.style.backgroundColor =  red;
            diode3_5.style.backgroundColor =  red;
            diode2_5.style.backgroundColor =  red;

            break;
            case 'x':
                clear();

            diode2_1.style.backgroundColor =  red;
            diode3_2.style.backgroundColor =  red;
            diode4_3.style.backgroundColor =  red;
            diode5_2.style.backgroundColor =  red;
            diode6_1.style.backgroundColor =  red;
            diode6_5.style.backgroundColor =  red;
            diode5_4.style.backgroundColor =  red;
            diode4_3.style.backgroundColor =  red;
            diode3_4.style.backgroundColor =  red;
            diode2_5.style.backgroundColor =  red;

            break;
            case 'y':
                clear();

            diode2_1.style.backgroundColor =  red;
            diode3_2.style.backgroundColor =  red;
            diode4_3.style.backgroundColor =  red;
            diode5_3.style.backgroundColor =  red;
            diode6_3.style.backgroundColor =  red;
            diode3_4.style.backgroundColor =  red;
            diode2_5.style.backgroundColor =  red;
            

            break;
            case 'z':
                clear();

            diode2_1.style.backgroundColor = red;
            diode2_2.style.backgroundColor = red;
            diode2_3.style.backgroundColor = red;
            diode2_4.style.backgroundColor = red
            diode2_5.style.backgroundColor = red;
            diode3_4.style.backgroundColor = red;
            diode4_3.style.backgroundColor = red;
            diode5_2.style.backgroundColor = red;
            diode6_1.style.backgroundColor = red;
            diode6_2.style.backgroundColor = red;
            diode6_3.style.backgroundColor = red;
            diode6_4.style.backgroundColor = red;
            diode6_5.style.backgroundColor = red;


            break;
            case '/':
                clear();

            diode2_2.style.backgroundColor = h_c;
            diode3_1.style.backgroundColor = h_c;
            diode4_1.style.backgroundColor = h_c;
            diode5_2.style.backgroundColor = h_c;
            diode6_3.style.backgroundColor = h_c;
            diode5_4.style.backgroundColor = h_c;
            diode4_5.style.backgroundColor = h_c;
            diode3_5.style.backgroundColor = h_c;
            diode2_4.style.backgroundColor = h_c;
            diode3_3.style.backgroundColor = h_c;
            diode3_2.style.backgroundColor = h_c;
            diode3_4.style.backgroundColor = h_c;
            diode4_2.style.backgroundColor = h_c;
            diode4_3.style.backgroundColor = h_c;
            diode4_4.style.backgroundColor = h_c;
            diode5_3.style.backgroundColor = h_c;
            



            break;




case 'a':
                    clear();
                    diode6_2.style.backgroundColor =  red;
                    diode5_2.style.backgroundColor =  red;
                    diode4_2.style.backgroundColor =  red;
                    diode3_2.style.backgroundColor =  red;
                    diode2_3.style.backgroundColor =  red;
                    diode3_4.style.backgroundColor =  red ;
                    diode4_4.style.backgroundColor =  red;
                    diode5_4.style.backgroundColor =  red;
                    diode6_4.style.backgroundColor =  red;
                    diode4_3.style.backgroundColor =  red;
                    break;
                   
                case 'b':
                     clear();
                    diode6_2.style.backgroundColor =  red;
                    diode5_2.style.backgroundColor =  red;
                    diode4_2.style.backgroundColor =  red;
                    diode3_2.style.backgroundColor =  red;
                    diode2_2.style.backgroundColor =  red;
                    diode4_3.style.backgroundColor =  red;
                    diode2_3.style.backgroundColor =  red;
                    diode6_3.style.backgroundColor =  red;
                    diode3_4.style.backgroundColor =  red;
                    diode5_4.style.backgroundColor =  red;
                    break;
                  
                case 'o':
                     clear();
                    diode2_3.style.backgroundColor =  red;
                    diode3_2.style.backgroundColor =  red;
                    diode4_2.style.backgroundColor =  red;
                    diode5_2.style.backgroundColor =  red;
                    diode6_3.style.backgroundColor =  red;
                    diode5_4.style.backgroundColor =  red;
                    diode4_4.style.backgroundColor =  red;
                    diode3_4.style.backgroundColor =  red;

                    break;
                
                case 'p':
                     clear();
                    diode3_2.style.backgroundColor =  red;
                    diode4_2.style.backgroundColor =  red;
                    diode5_2.style.backgroundColor =  red;
                    diode6_2.style.backgroundColor =  red;
                    diode5_3.style.backgroundColor =  red;
                    diode4_4.style.backgroundColor =  red;
                    diode3_4.style.backgroundColor =  red;
                    diode2_3.style.backgroundColor =  red;
                    break;
                   
                case 'q':
                     clear();
                    diode2_3.style.backgroundColor =  red;
                    diode3_2.style.backgroundColor =  red;
                    diode4_2.style.backgroundColor =  red;
                    diode5_3.style.backgroundColor =  red;
                    diode3_4.style.backgroundColor =  red;
                    diode4_4.style.backgroundColor =  red;
                    diode5_4.style.backgroundColor =  red;
                    diode6_4.style.backgroundColor =  red;

break;
                    
                case 'r':
                     clear();
                    diode2_2.style.backgroundColor =  red;
                    diode2_3.style.backgroundColor =  red;
                    diode2_4.style.backgroundColor =  red;
                    diode3_2.style.backgroundColor =  red;
                    diode3_4.style.backgroundColor =  red;
                    diode4_4.style.backgroundColor =  red;
                    diode4_3.style.backgroundColor =  red;
                    diode4_2.style.backgroundColor =  red;
                    diode5_2.style.backgroundColor =  red;
                    diode5_3.style.backgroundColor =  red;
                    diode6_2.style.backgroundColor =  red;
                    diode6_4.style.backgroundColor =  red;
                    break;
                    
                case 's':
                     clear();
                    diode2_2.style.backgroundColor = diodeColor;
                    diode2_3.style.backgroundColor = diodeColor;
                    diode2_4.style.backgroundColor = diodeColor;
                    diode3_2.style.backgroundColor = diodeColor;
                    diode4_2.style.backgroundColor = diodeColor;
                    diode4_4.style.backgroundColor = diodeColor;
                    diode4_3.style.backgroundColor = diodeColor;
                    diode5_4.style.backgroundColor = diodeColor;
                    diode6_4.style.backgroundColor = diodeColor;
                    diode6_3.style.backgroundColor = diodeColor;
                    diode6_2.style.backgroundColor = diodeColor;

                    break;
                  
                case 't':
                     clear();
                    diode2_2.style.backgroundColor = diodeColor;
                    diode2_3.style.backgroundColor = diodeColor;
                    diode2_4.style.backgroundColor = diodeColor;
                    diode3_3.style.backgroundColor = diodeColor;
                    diode4_3.style.backgroundColor = diodeColor;
                    diode5_3.style.backgroundColor = diodeColor;
                    diode6_3.style.backgroundColor = diodeColor;
                    break;
                    case'c':
                    clear();
                    diode2_4.style.backgroundColor = diodeColor;
                    diode2_3.style.backgroundColor = diodeColor;
                    diode3_2.style.backgroundColor = diodeColor;
                    diode3_2.style.backgroundColor = diodeColor;
                    diode4_2.style.backgroundColor = diodeColor;
                    diode5_2.style.backgroundColor = diodeColor;
                    diode6_3.style.backgroundColor = diodeColor;
                    diode6_4.style.backgroundColor = diodeColor;
                    break
                    

                    case 'd':
                        clear();
                    diode2_4.style.backgroundColor = diodeColor;
                    diode3_4.style.backgroundColor = diodeColor;
                    diode4_4.style.backgroundColor = diodeColor;
                    diode4_3.style.backgroundColor = diodeColor;
                    diode5_2.style.backgroundColor = diodeColor;
                    diode6_3.style.backgroundColor = diodeColor;
                    diode6_4.style.backgroundColor = diodeColor;
                    diode5_4.style.backgroundColor = diodeColor;
                    break

                    case 'e': 
                    clear();
                    diode2_3.style.backgroundColor = diodeColor;
                    diode3_4.style.backgroundColor = diodeColor;
                    diode3_2.style.backgroundColor = diodeColor;
                    diode4_3.style.backgroundColor = diodeColor;
                    diode4_2.style.backgroundColor = diodeColor;
                    diode5_2.style.backgroundColor = diodeColor;
                    diode6_3.style.backgroundColor = diodeColor;
                    
                   break


                   case 'f' :
                    clear();
                   diode2_4.style.backgroundColor = diodeColor;
                   diode2_3.style.backgroundColor = diodeColor;
                   diode3_2.style.backgroundColor = diodeColor;
                   diode4_2.style.backgroundColor = diodeColor;
                   diode4_3.style.backgroundColor = diodeColor;
                   diode5_2.style.backgroundColor = diodeColor;
                   diode6_2.style.backgroundColor = diodeColor;
                   break

                   case 'g' : clear();
                   diode1_4.style.backgroundColor = diodeColor;
                   diode2_4.style.backgroundColor = diodeColor;
                   diode2_3.style.backgroundColor = diodeColor;
                   diode3_2.style.backgroundColor = diodeColor;
                   diode4_3.style.backgroundColor = diodeColor;
                   diode3_4.style.backgroundColor = diodeColor;
                   diode4_4.style.backgroundColor = diodeColor;
                   diode5_4.style.backgroundColor = diodeColor;
                   diode6_3.style.backgroundColor = diodeColor;
                   diode6_2.style.backgroundColor = diodeColor;
                   break

                   case 'h' : clear();
                   diode2_2.style.backgroundColor = diodeColor;
                   diode3_2.style.backgroundColor = diodeColor;
                   diode4_2.style.backgroundColor = diodeColor;
                   diode5_2.style.backgroundColor = diodeColor;
                   diode6_2.style.backgroundColor = diodeColor;
                   diode4_3.style.backgroundColor = diodeColor;
                   diode5_4.style.backgroundColor = diodeColor;
                   diode6_4.style.backgroundColor = diodeColor;
                   break;

case 'i':
            clear();
            diode2_3.style.backgroundColor = diodeColor;
            diode4_3.style.backgroundColor = diodeColor;
            diode5_3.style.backgroundColor = diodeColor;
            diode6_3.style.backgroundColor = diodeColor;
            diode7_3.style.backgroundColor = diodeColor;
            break;
            
            case 'j':
            clear();
            diode1_3.style.backgroundColor = diodeColor;
            diode3_3.style.backgroundColor = diodeColor;
            diode4_3.style.backgroundColor = diodeColor;
            diode5_3.style.backgroundColor = diodeColor;
            diode6_2.style.backgroundColor = diodeColor;
            break;

            case 'l':
            clear();
            diode2_2.style.backgroundColor = diodeColor;
            diode3_2.style.backgroundColor = diodeColor;
            diode4_2.style.backgroundColor = diodeColor;
            diode5_2.style.backgroundColor = diodeColor;
            diode6_2.style.backgroundColor = diodeColor;
            diode6_3.style.backgroundColor = diodeColor;
            diode6_4.style.backgroundColor = diodeColor;
            diode6_5.style.backgroundColor = diodeColor;
            break;

            case 'm':
            clear();
            diode6_1.style.backgroundColor = diodeColor;
            diode5_1.style.backgroundColor = diodeColor;
            diode4_1.style.backgroundColor = diodeColor;
            diode3_1.style.backgroundColor = diodeColor;
            diode2_1.style.backgroundColor = diodeColor;
            diode3_2.style.backgroundColor = diodeColor;
            diode4_3.style.backgroundColor = diodeColor;
            diode3_4.style.backgroundColor = diodeColor;
            diode2_5.style.backgroundColor = diodeColor;
            diode3_5.style.backgroundColor = diodeColor;
            diode4_5.style.backgroundColor = diodeColor;
            diode5_5.style.backgroundColor = diodeColor;
            diode6_5.style.backgroundColor = diodeColor;
            break;

            case 'n':
            clear();
            diode7_1.style.backgroundColor = diodeColor;
            diode6_1.style.backgroundColor = diodeColor;
            diode5_1.style.backgroundColor = diodeColor;
            diode4_1.style.backgroundColor = diodeColor;
            diode3_1.style.backgroundColor = diodeColor;
            diode4_2.style.backgroundColor = diodeColor;
            diode5_3.style.backgroundColor = diodeColor;
            diode6_4.style.backgroundColor = diodeColor;
            diode7_5.style.backgroundColor = diodeColor;
            diode6_5.style.backgroundColor = diodeColor;
            diode5_5.style.backgroundColor = diodeColor;
            diode4_5.style.backgroundColor = diodeColor;
            diode3_5.style.backgroundColor = diodeColor;
            break;

case 'k':
            clear();
            diode7_2.style.backgroundColor = diodeColor;
            diode6_2.style.backgroundColor = diodeColor;
            diode5_2.style.backgroundColor = diodeColor;
            diode4_2.style.backgroundColor = diodeColor;
            diode3_2.style.backgroundColor = diodeColor;
            diode2_2.style.backgroundColor = diodeColor;
            diode5_2.style.backgroundColor = diodeColor;
            diode6_3.style.backgroundColor = diodeColor;
            diode7_4.style.backgroundColor = diodeColor;
            diode4_3.style.backgroundColor = diodeColor;
            diode3_4.style.backgroundColor = diodeColor;
            
            break;

              }  i++;
        } else {
            clearInterval(timerId);
            clear();
        }
    },500)
};




    
   

function clear() {
    diode1_1.style.backgroundColor = clear_color;
    diode1_2.style.backgroundColor = clear_color;
    diode1_3.style.backgroundColor = clear_color;
    diode1_4.style.backgroundColor = clear_color;
    diode1_5.style.backgroundColor = clear_color;

    diode2_1.style.backgroundColor = clear_color;
    diode2_2.style.backgroundColor = clear_color;
    diode2_3.style.backgroundColor = clear_color;
    diode2_4.style.backgroundColor = clear_color;
    diode2_5.style.backgroundColor = clear_color;

    diode3_1.style.backgroundColor = clear_color;
    diode3_2.style.backgroundColor = clear_color;
    diode3_3.style.backgroundColor = clear_color;
    diode3_4.style.backgroundColor = clear_color;
    diode3_5.style.backgroundColor = clear_color;

    diode4_1.style.backgroundColor = clear_color;
    diode4_2.style.backgroundColor = clear_color;
    diode4_3.style.backgroundColor = clear_color;
    diode4_4.style.backgroundColor = clear_color;
    diode4_5.style.backgroundColor = clear_color;

    diode5_1.style.backgroundColor = clear_color;
    diode5_2.style.backgroundColor = clear_color;
    diode5_3.style.backgroundColor = clear_color;
    diode5_4.style.backgroundColor = clear_color;
    diode5_5.style.backgroundColor = clear_color;

    diode6_1.style.backgroundColor = clear_color;
    diode6_2.style.backgroundColor = clear_color;
    diode6_3.style.backgroundColor = clear_color;
    diode6_4.style.backgroundColor = clear_color;
    diode6_5.style.backgroundColor = clear_color;

    diode7_1.style.backgroundColor = clear_color;
    diode7_2.style.backgroundColor = clear_color;
    diode7_3.style.backgroundColor = clear_color;
    diode7_4.style.backgroundColor = clear_color;
    diode7_5.style.backgroundColor = clear_color;
}