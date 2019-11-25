// Libs
import React from 'react'
import joinClassNames from 'classnames'

// Assets
import './_style.scss'

const Small = () => (
  <svg height="12" viewBox="0 0 21 12" width="21" xmlns="http://www.w3.org/2000/svg">
    <path d="m14.4 12h-11.29655172c-.6627417 0-1.2-.5372583-1.2-1.2s.5372583-1.2 1.2-1.2h3.78620689c.6627417 0 1.2-.5372583 1.2-1.2s-.5372583-1.2-1.2-1.2h-5.68965517c-.6627417 0-1.2-.5372583-1.2-1.2s.5372583-1.2 1.2-1.2h4.73793103c.6627417 0 1.2-.5372583 1.2-1.2s-.5372583-1.2-1.2-1.2h-1.40689655c-.6627417 0-1.2-.5372583-1.2-1.2s.5372583-1.2 1.2-1.2h9.86896552c3.3137085 0 6 2.6862915 6 6s-2.6862915 6-6 6zm0-1.2c2.6509668 0 4.8-2.1490332 4.8-4.8s-2.1490332-4.8-4.8-4.8-4.8 2.1490332-4.8 4.8 2.1490332 4.8 4.8 4.8zm.6583212-4.99745339 1.3274652 1.34159027c.2294696.23191128.2294696.6053308 0 .83724208-.2263552.22876383-.5953022.23071635-.824066.00436107l-.0043611-.00436107-1.410366-1.42537317c-.2223022-.22466759-.3469933-.52796601-.3469933-.84402579v-2.12619356c0-.32352092.2622655-.58578644.5857864-.58578644.323521 0 .5857865.26226552.5857865.58578644v2.00575373c0 .07901494.0311728.15483955.0867483.21100644z" fill="#68a51c" fillRule="evenodd" />
  </svg>
)

const Medium = () => (
  <svg height="12" viewBox="0 0 93 12" width="93" xmlns="http://www.w3.org/2000/svg">
    <g fill="none" fillRule="evenodd">
      <path d="m25.486 2.824-.182 2.31h3.57c.3173349 0 .5576659.06766599.721.203.1633342.13533401.245.32899874.245.581 0 .6066697-.3593297.91-1.078.91h-3.584l-.196 2.478h3.85c.3080015 0 .5459992.0699993.714.21s.252.33599874.252.588c0 .5973363-.368663.896-1.106.896h-4.956c-.3266683 0-.5716658-.0886658-.735-.266-.1633341-.1773342-.2310001-.4293317-.203-.756l.616-7.826c.0280001-.3266683.1376657-.57866578.329-.756s.4503317-.266.777-.266h4.956c.3173349 0 .5576659.0699993.721.21.1633342.1400007.245.33133212.245.574 0 .6066697-.3639964.91-1.092.91zm13.376-1.414c.2053344-.24266788.4526652-.364.742-.364.2520013 0 .4713324.0933324.658.28s.28.41066536.28.672c0 .24266788-.0933324.47599888-.28.7l-2.912 3.318 2.562 3.416c.1400007.17733422.21.37333226.21.588 0 .2800014-.1119989.5296656-.336.749s-.4759986.329-.756.329c-.270668 0-.4993324-.1213321-.686-.364l-2.38-3.262-2.772 3.262c-.2053344.2426679-.4526652.364-.742.364-.2520013 0-.4713324-.0933324-.658-.28s-.28-.4106654-.28-.672c0-.25200126.097999-.48999888.294-.714l3.01-3.472-2.366-3.262c-.1306673-.16800084-.196-.35933226-.196-.574 0-.2800014.1119989-.52966557.336-.749s.4759986-.329.756-.329.5086658.12133212.686.364l2.184 3.038zm8.7-.28c1.0453386 0 1.8573304.25899741 2.436.777s.868 1.2203289.868 2.107c0 1.05467194-.3103302 1.86433051-.931 2.429s-1.5096609.847-2.667.847h-2.394l-.21 2.716c-.0280001.3266683-.1469989.587999-.357.784-.210001.196001-.4829983.294-.819.294s-.5949991-.097999-.777-.294-.2590001-.4619983-.231-.798l.616-7.84c.0280001-.3266683.1376657-.57866578.329-.756s.4503317-.266.777-.266zm-.49 4.508c1.1666725 0 1.75-.49932834 1.75-1.498 0-.45733562-.1259987-.79566557-.378-1.015s-.6393307-.329-1.162-.329h-2.058l-.224 2.842zm13.628 4.06c.074667.16800084.112.3173327.112.448 0 .270668-.1143322.5016657-.343.693s-.4876652.287-.777.287c-.196001 0-.3756658-.0513328-.539-.154-.1633341-.1026672-.2963328-.2566656-.399-.462l-1.302-2.66c-.1213339-.24266788-.2706658-.41766613-.448-.525s-.4059986-.161-.686-.161h-1.12l-.21 2.842c-.0280001.3266683-.1446656.587999-.35.784s-.4713317.294-.798.294c-.3360017 0-.5949991-.097999-.777-.294s-.2590001-.4619983-.231-.798l.616-7.84c.0280001-.3266683.1376657-.57866578.329-.756s.4503317-.266.777-.266h3.556c1.0266718 0 1.8246638.25199748 2.394.756s.854 1.19466228.854 2.072c0 .86800434-.2123312 1.55399748-.637 2.058s-1.0756623.83066592-1.953.98c.2426679.06533366.4479992.17966585.616.343s.3266659.39433184.476.693zm-3.066-4.186c.5506694 0 .9683319-.12133212 1.253-.364s.427-.597331.427-1.064c0-.43866886-.1213321-.76299895-.364-.973s-.6159975-.315-1.12-.315h-2.31l-.196 2.716zm8.7-2.688-.182 2.31h3.57c.3173349 0 .5576659.06766599.721.203.1633342.13533401.245.32899874.245.581 0 .6066697-.3593297.91-1.078.91h-3.584l-.196 2.478h3.85c.3080015 0 .5459992.0699993.714.21s.252.33599874.252.588c0 .5973363-.368663.896-1.106.896h-4.956c-.3266683 0-.5716658-.0886658-.735-.266-.1633341-.1773342-.2310001-.4293317-.203-.756l.616-7.826c.0280001-.3266683.1376657-.57866578.329-.756s.4503317-.266.777-.266h4.956c.3173349 0 .5576659.0699993.721.21.1633342.1400007.245.33133212.245.574 0 .6066697-.3639964.91-1.092.91zm10.03 8.302c-.737337 0-1.4093303-.0769992-2.016-.231s-1.105998-.3569987-1.498-.609c-.1586675-.1120006-.2799996-.2449992-.364-.399-.0840004-.15400077-.126-.31033254-.126-.469 0-.2333345.0699993-.43399916.21-.602s.3219989-.252.546-.252c.1866676 0 .3733324.05599944.56.168.3266683.20533436.7303309.37333268 1.211.504s1.0009972.196 1.561.196c.6066697 0 1.0709984-.0933324 1.393-.28s.483-.45266494.483-.798c0-.2333345-.0863325-.43166585-.259-.595s-.394332-.29633282-.665-.399-.639331-.2239993-1.106-.364c-.6906701-.20533436-1.2529978-.40366571-1.687-.595s-.8073318-.47833142-1.12-.861-.469-.8773303-.469-1.484.1679983-1.14099769.504-1.603.8119969-.81899874 1.428-1.071 1.3346626-.378 2.156-.378c.6906701 0 1.3346637.08399916 1.932.252s1.0733316.39666522 1.428.686c.2333345.17733422.35.41999846.35.728 0 .2333345-.0746659.43866578-.224.616s-.3406655.266-.574.266c-.196001 0-.391999-.06533268-.588-.196-.2893348-.1866676-.6439979-.34299937-1.064-.469s-.8539978-.189-1.302-.189c-.5880029 0-1.047665.10266564-1.379.308s-.497.48999818-.497.854c0 .25200126.0909991.46199916.273.63s.4106653.30566613.686.413.6556642.2309993 1.141.371c.6720034.19600098 1.2226645.38966571 1.652.581s.7956652.46899818 1.099.833c.3033349.36400182.455.83999706.455 1.428 0 .95200476-.361663 1.69166403-1.085 2.219-.7233369.527336-1.7383268.791-3.045.791zm10.114 0c-.737337 0-1.4093303-.0769992-2.016-.231s-1.105998-.3569987-1.498-.609c-.1586675-.1120006-.2799996-.2449992-.364-.399-.0840004-.15400077-.126-.31033254-.126-.469 0-.2333345.0699993-.43399916.21-.602s.3219989-.252.546-.252c.1866676 0 .3733324.05599944.56.168.3266683.20533436.7303309.37333268 1.211.504s1.0009972.196 1.561.196c.6066697 0 1.0709984-.0933324 1.393-.28s.483-.45266494.483-.798c0-.2333345-.0863325-.43166585-.259-.595s-.394332-.29633282-.665-.399-.639331-.2239993-1.106-.364c-.6906701-.20533436-1.2529978-.40366571-1.687-.595s-.8073318-.47833142-1.12-.861-.469-.8773303-.469-1.484.1679983-1.14099769.504-1.603.8119969-.81899874 1.428-1.071 1.3346626-.378 2.156-.378c.6906701 0 1.3346637.08399916 1.932.252s1.0733316.39666522 1.428.686c.2333345.17733422.35.41999846.35.728 0 .2333345-.0746659.43866578-.224.616s-.3406655.266-.574.266c-.196001 0-.391999-.06533268-.588-.196-.2893348-.1866676-.6439979-.34299937-1.064-.469s-.8539978-.189-1.302-.189c-.5880029 0-1.047665.10266564-1.379.308s-.497.48999818-.497.854c0 .25200126.0909991.46199916.273.63s.4106653.30566613.686.413.6556642.2309993 1.141.371c.6720034.19600098 1.2226645.38966571 1.652.581s.7956652.46899818 1.099.833c.3033349.36400182.455.83999706.455 1.428 0 .95200476-.361663 1.69166403-1.085 2.219-.7233369.527336-1.7383268.791-3.045.791z" fill="#3d3d3d" fillRule="nonzero" />
      <path d="m14.4 12h-11.29655172c-.6627417 0-1.2-.5372583-1.2-1.2s.5372583-1.2 1.2-1.2h3.78620689c.6627417 0 1.2-.5372583 1.2-1.2s-.5372583-1.2-1.2-1.2h-5.68965517c-.6627417 0-1.2-.5372583-1.2-1.2s.5372583-1.2 1.2-1.2h4.73793103c.6627417 0 1.2-.5372583 1.2-1.2s-.5372583-1.2-1.2-1.2h-1.40689655c-.6627417 0-1.2-.5372583-1.2-1.2s.5372583-1.2 1.2-1.2h9.86896552c3.3137085 0 6 2.6862915 6 6s-2.6862915 6-6 6zm0-1.2c2.6509668 0 4.8-2.1490332 4.8-4.8s-2.1490332-4.8-4.8-4.8-4.8 2.1490332-4.8 4.8 2.1490332 4.8 4.8 4.8zm.6583212-4.99745339 1.3274652 1.34159027c.2294696.23191128.2294696.6053308 0 .83724208-.2263552.22876383-.5953022.23071635-.824066.00436107l-.0043611-.00436107-1.410366-1.42537317c-.2223022-.22466759-.3469933-.52796601-.3469933-.84402579v-2.12619356c0-.32352092.2622655-.58578644.5857864-.58578644.323521 0 .5857865.26226552.5857865.58578644v2.00575373c0 .07901494.0311728.15483955.0867483.21100644z" fill="#68a51c" />
    </g>
  </svg>
)

const Large = () => (
  <svg height="20" viewBox="0 0 147 20" width="147" xmlns="http://www.w3.org/2000/svg">
    <g fill="none" fillRule="evenodd">
      <path d="m24 20h-18.82758621c-1.1045695 0-2-.8954305-2-2s.8954305-2 2-2h6.31034481c1.1045695 0 2-.8954305 2-2s-.8954305-2-2-2h-9.4827586c-1.1045695 0-2-.8954305-2-2s.8954305-2 2-2h7.89655172c1.10456948 0 1.99999998-.8954305 1.99999998-2s-.8954305-2-1.99999998-2h-2.34482758c-1.1045695 0-2-.8954305-2-2s.8954305-2 2-2h16.44827586c5.5228475 0 10 4.4771525 10 10s-4.4771525 10-10 10zm0-2c4.418278 0 8-3.581722 8-8s-3.581722-8-8-8-8 3.581722-8 8 3.581722 8 8 8zm1.097202-8.32908898 2.2124421 2.23598378c.3824493.3865188.3824493 1.0088847 0 1.3954035-.3772588.381273-.9921704.3845272-1.3734435.0072684-.0024356-.00241-.0048584-.0048328-.0072684-.0072684l-2.3506101-2.375622c-.3705036-.374446-.5783221-.8799433-.5783221-1.40670963v-3.54365594c0-.53920153.4371092-.97631073.9763107-.97631073.5392016 0 .9763108.4371092.9763108.97631073v3.34292288c0 .13169157.0519546.25806592.1445805.35167741z" fill="#68a51c" />
      <path d="m42.478 5.152-.286 3.63h5.61c.4986692 0 .8763321.10633227 1.133.319.256668.21266773.385.51699802.385.913 0 .9533381-.564661 1.43-1.694 1.43h-5.632l-.308 3.894h6.05c.4840024 0 .8579987.1099989 1.122.33s.396.527998.396.924c0 .9386714-.5793275 1.408-1.738 1.408h-7.788c-.5133359 0-.898332-.1393319-1.155-.418-.2566679-.2786681-.3630002-.6746641-.319-1.188l.968-12.298c.0440002-.5133359.2163318-.90933194.517-1.188s.7076641-.418 1.221-.418h7.788c.4986692 0 .8763321.1099989 1.133.33.256668.2200011.385.52066476.385.902 0 .9533381-.5719943 1.43-1.716 1.43zm20.948-2.222c.3226683-.38133524.7113311-.572 1.166-.572.396002 0 .7406652.1466652 1.034.44s.44.64533128.44 1.056c0 .38133524-.1466652.74799824-.44 1.1l-4.576 5.214 4.026 5.368c.2200011.2786681.33.586665.33.924 0 .4400022-.1759982.8323316-.528 1.177s-.7479978.517-1.188.517c-.4253355 0-.7846652-.1906648-1.078-.572l-3.74-5.126-4.356 5.126c-.3226683.3813352-.7113311.572-1.166.572-.396002 0-.7406652-.1466652-1.034-.44s-.44-.6453313-.44-1.056c0-.396002.1539985-.7699982.462-1.122l4.73-5.456-3.718-5.126c-.2053344-.26400132-.308-.56466498-.308-.902 0-.4400022.1759982-.83233161.528-1.177s.7479978-.517 1.188-.517.7993319.19066476 1.078.572l3.432 4.774zm13.6-.44c1.6426749 0 2.9186621.40699593 3.828 1.221s1.364 1.9176597 1.364 3.311c0 1.65734162-.4876618 2.92966223-1.463 3.817-.9753382.8873378-2.3723242 1.331-4.191 1.331h-3.762l-.33 4.268c-.0440002.5133359-.2309983.9239985-.561 1.232-.3300016.3080015-.7589974.462-1.287.462s-.9349986-.1539985-1.221-.462-.4070002-.7259974-.363-1.254l.968-12.32c.0440002-.5133359.2163318-.90933194.517-1.188s.7076641-.418 1.221-.418zm-.77 7.084c1.8333425 0 2.75-.78465882 2.75-2.354 0-.71867026-.197998-1.25033161-.594-1.595s-1.0046626-.517-1.826-.517h-3.234l-.352 4.466zm21.344 6.38c.1173339.2640013.176.4986656.176.704 0 .4253355-.1796649.7883318-.539 1.089s-.7663311.451-1.221.451c-.3080015 0-.590332-.0806659-.847-.242-.2566679-.1613341-.4656659-.4033317-.627-.726l-2.046-4.18c-.1906676-.3813352-.4253319-.6563325-.704-.825s-.6379978-.253-1.078-.253h-1.76l-.33 4.466c-.0440002.5133359-.2273317.9239985-.55 1.232s-.7406641.462-1.254.462c-.5280026 0-.9349986-.1539985-1.221-.462s-.4070002-.7259974-.363-1.254l.968-12.32c.0440002-.5133359.2163318-.90933194.517-1.188s.7076641-.418 1.221-.418h5.588c1.6133414 0 2.8673289.39599604 3.762 1.188s1.342 1.87732644 1.342 3.256c0 1.36400682-.3336633 2.44199604-1.001 3.234-.6673367.792004-1.6903264 1.3053322-3.069 1.54.3813352.1026672.7039987.282332.968.539.2640013.2566679.5133322.6196643.748 1.089zm-4.818-6.578c.8653377 0 1.5216644-.19066476 1.969-.572s.671-.938663.671-1.672c0-.68933678-.1906648-1.19899835-.572-1.529s-.967996-.495-1.76-.495h-3.63l-.308 4.268zm13.6-4.224-.286 3.63h5.61c.498669 0 .876332.10633227 1.133.319s.385.51699802.385.913c0 .9533381-.564661 1.43-1.694 1.43h-5.632l-.308 3.894h6.05c.484002 0 .857999.1099989 1.122.33s.396.527998.396.924c0 .9386714-.579328 1.408-1.738 1.408h-7.788c-.513336 0-.898332-.1393319-1.155-.418s-.363-.6746641-.319-1.188l.968-12.298c.044-.5133359.216332-.90933194.517-1.188s.707664-.418 1.221-.418h7.788c.498669 0 .876332.1099989 1.133.33s.385.52066476.385.902c0 .9533381-.571994 1.43-1.716 1.43zm15.69 13.046c-1.158672 0-2.214662-.1209988-3.168-.363s-1.737997-.560998-2.354-.957c-.249335-.1760009-.439999-.3849988-.572-.627s-.198-.4876654-.198-.737c0-.3666685.109999-.6819987.33-.946s.505998-.396.858-.396c.293335 0 .586665.0879991.88.264.513336.3226683 1.147663.5866656 1.903.792s1.572996.308 2.453.308c.953338 0 1.682997-.1466652 2.189-.44s.759-.7113306.759-1.254c0-.3666685-.135665-.6783321-.407-.935-.271335-.256668-.619665-.4656659-1.045-.627s-1.004663-.3519989-1.738-.572c-1.085339-.3226683-1.968997-.6343318-2.651-.935s-1.268664-.7516637-1.76-1.353c-.491336-.60133634-.737-1.3786619-.737-2.332s.263997-1.79299637.792-2.519 1.275995-1.28699802 2.244-1.683 2.097327-.594 3.388-.594c1.085339 0 2.097329.13199868 3.036.396s1.686664.62333106 2.244 1.078c.366669.27866806.55.65999758.55 1.144 0 .3666685-.117332.68933194-.352.968s-.535332.418-.902.418c-.308002 0-.615998-.10266564-.924-.308-.454669-.2933348-1.011997-.53899901-1.672-.737s-1.341996-.297-2.046-.297c-.924005 0-1.646331.16133172-2.167.484s-.781.76999714-.781 1.342c0 .39600198.142999.72599868.429.99s.645331.48033249 1.078.649 1.03033.3629989 1.793.583c1.056005.30800154 1.92133.61233183 2.596.913.67467.3006682 1.250331.7369971 1.727 1.309s.715 1.3199954.715 2.244c0 1.4960075-.568328 2.6583292-1.705 3.487s-2.731656 1.243-4.785 1.243zm15.822 0c-1.158672 0-2.214662-.1209988-3.168-.363s-1.737997-.560998-2.354-.957c-.249335-.1760009-.439999-.3849988-.572-.627s-.198-.4876654-.198-.737c0-.3666685.109999-.6819987.33-.946s.505998-.396.858-.396c.293335 0 .586665.0879991.88.264.513336.3226683 1.147663.5866656 1.903.792s1.572996.308 2.453.308c.953338 0 1.682997-.1466652 2.189-.44s.759-.7113306.759-1.254c0-.3666685-.135665-.6783321-.407-.935-.271335-.256668-.619665-.4656659-1.045-.627s-1.004663-.3519989-1.738-.572c-1.085339-.3226683-1.968997-.6343318-2.651-.935s-1.268664-.7516637-1.76-1.353c-.491336-.60133634-.737-1.3786619-.737-2.332s.263997-1.79299637.792-2.519 1.275995-1.28699802 2.244-1.683 2.097327-.594 3.388-.594c1.085339 0 2.097329.13199868 3.036.396s1.686664.62333106 2.244 1.078c.366669.27866806.55.65999758.55 1.144 0 .3666685-.117332.68933194-.352.968s-.535331.418-.902.418c-.308002 0-.615998-.10266564-.924-.308-.454669-.2933348-1.011997-.53899901-1.672-.737s-1.341996-.297-2.046-.297c-.924005 0-1.646331.16133172-2.167.484s-.781.76999714-.781 1.342c0 .39600198.142999.72599868.429.99s.645331.48033249 1.078.649 1.03033.3629989 1.793.583c1.056005.30800154 1.92133.61233183 2.596.913.67467.3006682 1.250331.7369971 1.727 1.309s.715 1.3199954.715 2.244c0 1.4960075-.568328 2.6583292-1.705 3.487s-2.731656 1.243-4.785 1.243z" fill="#3d3d3d" fillRule="nonzero" />
    </g>
  </svg>
)

const ExpressLogoBase = ({
  children, className, color,
}) => {
  const modifiers = [
    !!color && `express-logo--${color}`,
  ]
  const classNames = joinClassNames('express-logo', className, modifiers)

  return (
    <span className={classNames}>
      {children}
    </span>
  )
}

const ExpressLogo = ({ size, ...props }) => {
  const icons = {
    small: Small,
    medium: Medium,
    large: Large,
  }

  const ExpressLogoPath = icons[size]

  return (
    <ExpressLogoBase {...props}>
      <ExpressLogoPath size={size} />
    </ExpressLogoBase>
  )
}

ExpressLogo.defaultProps = {
  size: 'small',
}

export default ExpressLogo
