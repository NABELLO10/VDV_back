import nodemailer from "nodemailer"

const emailInscripcion = async (datos) => {

  const transport = nodemailer.createTransport({
    service: 'gmail',
    host: process.env.EMAIL_HOST,
    port: process.env.EMAIL_PORT,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    }
  });

  const { nombres, evento, ape_paterno, rut, email } = datos

  const info = await transport.sendMail({
    from: "Eventos VDV",
    to: email,
    subject: `Inscripción - ${evento.nom_evento}`,
    text: `Inscripción - ${evento.nom_evento}`,
    headers: {
      'Content-Language': 'es',
    },
    html: `
         <table class="es-wrapper" lang="es" width="100%" cellspacing="0" cellpadding="0" background="https://qlwwtg.stripocdn.email/content/guids/CABINET_a6c6eac76129ee45ac25fbcaf69cbde6e2edd13b391fb2ccb59702c66f449c5d/images/dalle_20240722_151708_a_seamless_black_background_image_completely_filled_with_the_small.jpg" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;padding:0;Margin:0;width:100%;height:100%;background-image:url(https://qlwwtg.stripocdn.email/content/guids/CABINET_a6c6eac76129ee45ac25fbcaf69cbde6e2edd13b391fb2ccb59702c66f449c5d/images/dalle_20240722_151708_a_seamless_black_background_image_completely_filled_with_the_small.jpg);background-repeat:repeat;background-position:center -100px;background-color:#040404">
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
                      <td align="center" style="padding:0;Margin:0;font-size:0px"><img class="adapt-img" src="${evento.imagen}" alt style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic" width="550"></td>
                     </tr>
                     <tr>
                      <td align="center" style="padding:0;Margin:0;padding-top:25px"><h1 style="Margin:0;line-height:45.6px;mso-line-height-rule:exactly;font-family:georgia, times, 'times new roman', serif;font-size:38px;font-style:normal;font-weight:normal;color:#ffffff"><span style="color:#c97f32">${nombres}</span> 😁&nbsp;</h1><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;line-height:21px;color:#ffffff;font-size:14px"><br></p></td>
                     </tr>
                     <tr>
                      <td align="center" style="padding:0;Margin:0;padding-top:5px;padding-bottom:5px"><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;line-height:21px;color:#dcdcdf;font-size:14px">Hemos recibido tu registro para el Congreso ${evento.nom_evento}</p></td>
                     </tr>

                          <tr>
                      <td align="center" style="padding:0;Margin:0;padding-top:5px;padding-bottom:5px"><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;line-height:21px;color:#dcdcdf;font-size:14px">${evento.detalle}</p></td>
                     </tr>
                    
                          <tr>
                      <td</td>
                     </tr>
                           <tr>
                                <tr>
                      <td align="center" style="padding:0;Margin:0;padding-top:5px;padding-bottom:5px"><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;line-height:21px;color:#dcdcdf;font-size:14px">Si por algún motivo NO puedes asistir, por favor avisar a través del botón que está a continuación para darle la oportunidad a otro hermano de poder inscribirse. </p></td>
                     </tr>
                           <tr>
                       <tr>
                      <td></td>
                     </tr>    <tr>
                      <td></td>
                     </tr>
                     
                  <tr>
                      <td align="center" style="padding:0;Margin:0;padding-top:5px;padding-bottom:5px"><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;line-height:21px;color:#dcdcdf;font-size:14px">Que sea de gran bendición para tu vida, Te Esperamos!</p></td>
                     </tr>
                           <tr>
                      
                      <tr>
                            <td align="center" style="padding:20px;Margin:0">
                              <a href="https://api.whatsapp.com/send?phone=${encodeURIComponent(evento.fono_encargado)}&text=Hola,%20soy%20${encodeURIComponent(nombres)}%20${encodeURIComponent(ape_paterno)},%20con%20RUT%20${encodeURIComponent(rut)},%20adjunto%20mi%20comprobante%20de%20pago%20para%20el%20evento%20${encodeURIComponent(evento.nom_evento)}." style="background-color:#25D366;color:white;text-decoration:none;padding:10px 20px;border-radius:5px;font-family:arial, 'helvetica neue', helvetica, sans-serif;font-size:14px;line-height:20px;display:inline-block">Enviar comprobante de pago al WhatsApp</a>
                            </td>
                          </tr>
                     </tr>
             
                          <tr>
                      <td></td>
                     </tr>

                      <tr>
                      <td align="center" style="padding:0;Margin:0;font-size:0px"><img class="adapt-img" src="https://kkai.stripocdn.email/content/guids/CABINET_a6c6eac76129ee45ac25fbcaf69cbde6e2edd13b391fb2ccb59702c66f449c5d/images/copia_de_logo_killer_home_1.png" alt style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic" height="51"></td>
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

export default emailInscripcion
