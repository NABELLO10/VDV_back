import nodemailer from "nodemailer"

const emailOlvidePassword = async (datos) => {

  
  const transport = nodemailer.createTransport({
    service:'gmail',      
    host: process.env.EMAIL_HOST,
    port:  process.env.EMAIL_PORT,
      auth: {
        user:  process.env.EMAIL_USER,
        pass:  process.env.EMAIL_PASS,
      }        
    });

      const {nombre, email, token} = datos

      const info = await transport.sendMail({
        from : "Plataforma VDV",
        to: email,
        subject : 'Recuperar Contraseña - Plataforma VDV',
        text : "Recuperar Contraseña - Plataforma VDV",
        html: `


        <table class="es-wrapper" width="100%" cellspacing="0" cellpadding="0" background="https://qlwwtg.stripocdn.email/content/guids/CABINET_e4da8ffda83432270f0dccfa58b0ff3074cc72b6b473d192095923728cec2899/images/dalle_20240722_151708_a_seamless_black_background_image_completely_filled_with_the_small_IHK.jpg" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;padding:0;Margin:0;width:100%;height:100%;background-image:url(https://qlwwtg.stripocdn.email/content/guids/CABINET_e4da8ffda83432270f0dccfa58b0ff3074cc72b6b473d192095923728cec2899/images/dalle_20240722_151708_a_seamless_black_background_image_completely_filled_with_the_small_IHK.jpg);background-repeat:repeat;background-position:center -100px;background-color:#040404">
     <tr>
      <td valign="top" style="padding:0;Margin:0">
       <table cellpadding="0" cellspacing="0" class="es-header" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%;background-color:transparent;background-repeat:repeat;background-position:center top">
         <tr>
          <td align="center" style="padding:0;Margin:0">
           <table bgcolor="#110b0b" class="es-header-body" align="center" cellpadding="0" cellspacing="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:#110b0b;width:600px">
             <tr>
              <td align="left" style="padding:20px;Margin:0;border-radius:35px">
               <table cellpadding="0" cellspacing="0" width="100%" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                 <tr>
                  <td align="center" valign="top" style="padding:0;Margin:0;width:560px">
                   <table cellpadding="0" cellspacing="0" width="100%" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                     <tr>
                      <td align="center" style="padding:0;Margin:0;font-size:0px"><img class="adapt-img" src="https://yyjhlx.stripocdn.email/content/guids/CABINET_e4da8ffda83432270f0dccfa58b0ff3074cc72b6b473d192095923728cec2899/images/logov_3zi.png" alt style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic" width="215"></td>
                     </tr>
                     <tr>
                      <td align="center" style="padding:0;Margin:0;padding-top:10px"><h1 style="Margin:0;line-height:45.6px;mso-line-height-rule:exactly;font-family:georgia, times, 'times new roman', serif;font-size:38px;font-style:normal;font-weight:normal;color:#ffffff">Restablecer Contraseña 🙈</h1><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;line-height:21px;color:#ffffff;font-size:14px"><br></p></td>
                     </tr>
                     <tr>
                      <td align="center" style="padding:0;Margin:0;padding-top:10px"><h1 style="Margin:0;line-height:45.6px;mso-line-height-rule:exactly;font-family:georgia, times, 'times new roman', serif;font-size:38px;font-style:normal;font-weight:normal;color:#ffffff"><span style="color:#c97f32">${nombre}</span>&nbsp;&nbsp;<br></h1></td>
                     </tr>
                     <tr>
                      <td align="center" style="padding:0;Margin:0;padding-top:5px;padding-bottom:5px"><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;line-height:21px;color:#f0fff0;font-size:14px">Has solicitado restablecer tu contraseña.</p><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;line-height:21px;color:#f0fff0;font-size:14px">Sigue el siguiente enlace, para restablecer tu contraseña</p></td>
                     </tr>
                     <tr>
                      <td align="center" style="padding:0;Margin:0;padding-top:20px;padding-bottom:20px"><!--[if mso]><a href="https://viewstripo.email" target="_blank" hidden>
	<v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word" esdevVmlButton href="https://viewstripo.email" 
                style="height:51px; v-text-anchor:middle; width:293px" arcsize="14%" stroke="f"  fillcolor="#ffffff">
		<w:anchorlock></w:anchorlock>
		<center style='color:#090000; font-family:arial, "helvetica neue", helvetica, sans-serif; font-size:18px; font-weight:400; line-height:18px;  mso-text-raise:1px'>Restablecer Contraseñaa</center>
	</v:roundrect></a>
<![endif]--><!--[if !mso]><!-- --><span class="es-button-border-1721675398735 msohide es-button-border" style="border-style:solid;border-color:#2F3F67;background:#ffffff;border-width:1px;display:inline-block;border-radius:7px;width:auto;mso-hide:all"><a href="${process.env.FRONTEND_URL}/olvide-password/${token}" class="es-button es-button-1721675398728" target="_blank" style="mso-style-priority:100 !important;text-decoration:none;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;color:#090000;font-size:18px;padding:15px 35px 15px 35px;display:inline-block;background:#FFFFFF;border-radius:7px;font-family:arial, 'helvetica neue', helvetica, sans-serif;font-weight:normal;font-style:normal;line-height:21.6px;width:auto;text-align:center;mso-padding-alt:0;mso-border-alt:10px solid #ffffff">Restablecer Contraseña</a></span><!--<![endif]--></td>
                     </tr>
                     <tr>
                      <td align="center" style="padding:0;Margin:0;font-size:0px"><img class="adapt-img" src="https://yyjhlx.stripocdn.email/content/guids/CABINET_e4da8ffda83432270f0dccfa58b0ff3074cc72b6b473d192095923728cec2899/images/copia_de_logo_killer_home_1_CX4.png" alt style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic" height="51"></td>
                     </tr>
                   </table></td>
                 </tr>
               </table></td>
             </tr>
           </table></td>
         </tr>
       </table></td>
     </tr>
   </table>




      `
      })

      console.log("Mensaje Enviado: %s", info.messageId)
    
    
}



export default emailOlvidePassword