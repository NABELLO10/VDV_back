import nodemailer from "nodemailer"

const emailRegistro = async (datos) => {

  
  const transport = nodemailer.createTransport({
    service:'gmail',      
      auth: {
        user:  process.env.EMAIL_USER,
        pass:  process.env.EMAIL_PASS,
      }        
    });

/*     const transport = nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port:  process.env.EMAIL_PORT,
      auth: {
        user:  process.env.EMAIL_USER,
        pass:  process.env.EMAIL_PASS,
      }
    }); */

      const {nombre, email, token} = datos

      const info = await transport.sendMail({
        from : "tuPrimerERP",
        to: email,
        subject : 'Registro - tuPrimerERP',
        text : "Registro - tuPrimerERP",   

      html: `<table class="es-wrapper" width="100%" cellspacing="0" cellpadding="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;padding:0;Margin:0;width:100%;height:100%;background-repeat:repeat;background-position:center top;background-color:#314B70">
      <tbody><tr>
       <td valign="top" style="padding:0;Margin:0">
        <table cellpadding="0" cellspacing="0" class="es-content" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;width:100%;table-layout:fixed !important">
          <tbody><tr>
           <td align="center" style="padding:0;Margin:0">
            <table bgcolor="#ffffff" class="es-content-body" align="center" cellpadding="0" cellspacing="0" background="https://qlwwtg.stripocdn.email/content/guids/CABINET_dd9759b09de82ede623cff0b42f718ca19c0a4f85f6337f81c705fd693708d47/images/simonleezftw1kvehgunsplash_1_1.png" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:#07021F;background-repeat:no-repeat;width:600px;background-image:url(https://qlwwtg.stripocdn.email/content/guids/CABINET_dd9759b09de82ede623cff0b42f718ca19c0a4f85f6337f81c705fd693708d47/images/simonleezftw1kvehgunsplash_1_1.png);background-position:center bottom">
              <tbody><tr>
               <td class="es-m-p40t" align="left" style="Margin:0;padding-top:20px;padding-right:20px;padding-bottom:40px;padding-left:20px">
                <table cellpadding="0" cellspacing="0" width="100%" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                  <tbody><tr>
                   <td align="center" valign="top" style="padding:0;Margin:0;width:560px">
                    <table cellpadding="0" cellspacing="0" width="100%" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                      <tbody>
                      <tr>
                       <td align="center" style="padding:0;Margin:0;padding-bottom:35px"><h1 style="Margin:0;font-family:Righteous, sans-serif;mso-line-height-rule:exactly;letter-spacing:0;font-size:60px;font-style:normal;font-weight:bold;line-height:54px !important;color:#FFFFFF">&nbsp;</h1><h1 style="Margin:0;font-family:Righteous, sans-serif;mso-line-height-rule:exactly;letter-spacing:0;font-size:60px;font-style:normal;font-weight:bold;line-height:54px !important;color:#FFFFFF">Registro Usuario</h1></td>
                      </tr>
                      <tr>
                       <td align="center" class="es-m-p0r es-m-p0l" style="padding:0;Margin:0;padding-bottom:40px;padding-right:40px;padding-left:40px"><h3 style="Margin:0;font-family:Righteous, sans-serif;mso-line-height-rule:exactly;letter-spacing:0;font-size:20px;font-style:normal;font-weight:bold;line-height:24px;color:#FFFFFF">${nombre}</h3><p style="Margin:0;mso-line-height-rule:exactly;font-family:Manrope, sans-serif;line-height:27px;letter-spacing:0;color:#FFFFFF;font-size:18px"><br></p><p style="Margin:0;mso-line-height-rule:exactly;font-family:Manrope, sans-serif;line-height:27px;letter-spacing:0;color:#FFFFFF;font-size:18px">Bienvenido al sistema de gestón tuPrimerERP.</p><p style="Margin:0;mso-line-height-rule:exactly;font-family:Manrope, sans-serif;line-height:27px;letter-spacing:0;color:#FFFFFF;font-size:18px">Para confirmar tu cuenta, pincha en el siguiente botón:</p></td>
                      </tr>
                      <tr>
                       <td align="center" style="padding:0;Margin:0;padding-top:10px;padding-bottom:20px"><!--[if mso]><a href="https://viewstripo.email" target="_blank" hidden>
   <v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word" esdevVmlButton href="https://viewstripo.email" 
                 style="height:58px; v-text-anchor:middle; width:461px" arcsize="50%" stroke="f"  fillcolor="#0c177f">
     <w:anchorlock></w:anchorlock>
     <center style='color:#ffffff; font-family:Righteous, sans-serif; font-size:18px; font-weight:100; line-height:15px;  mso-text-raise:1px'>Confirmar Cuenta</center>
   </v:roundrect></a>
 <![endif]--><!--[if !mso]--><!-- --><span class="es-button-border msohide" style="border-style:solid;border-color:#2CB543;background:#0c177f;border-width:0px;display:inline-block;border-radius:30px;width:auto;mso-hide:all"><a href ="${process.env.FRONTEND_URL}/primer-ingreso/${token}" class="es-button es-button-1675432559559" target="_blank" style="mso-style-priority:100 !important;text-decoration:none !important;mso-line-height-rule:exactly;color:#FFFFFF;font-size:24px;padding:15px 40px;display:inline-block;background:#0c177f;border-radius:30px;font-family:Righteous, sans-serif;font-weight:normal;font-style:normal;line-height:29px;width:auto;text-align:center;letter-spacing:5px;mso-padding-alt:0;mso-border-alt:10px solid #0c177f">Confirmar Cuenta</a></span><!--<![endif]--></td>
                      </tr>
                      <tr>
                       <td align="center" style="padding:0;Margin:0;padding-right:40px;padding-left:40px;padding-bottom:15px"><p style="Margin:0;mso-line-height-rule:exactly;font-family:Manrope, sans-serif;line-height:27px;letter-spacing:0;color:#999999;font-size:18px">&nbsp;</p><p style="Margin:0;mso-line-height-rule:exactly;font-family:Manrope, sans-serif;line-height:27px;letter-spacing:0;color:#999999;font-size:18px"><em><sub>&nbsp;</sub></em></p><p style="Margin:0;mso-line-height-rule:exactly;font-family:Manrope, sans-serif;line-height:27px;letter-spacing:0;color:#999999;font-size:18px"><em><sub>E M S E G U R</sub></em></p></td>
                      </tr>
                    </tbody></table></td>
                  </tr>
                </tbody></table></td>
              </tr>
            </tbody></table></td>
          </tr>
        </tbody></table></td>
      </tr>
    </tbody></table>    `
      })

      console.log("Mensaje Enviado: %s", info.messageId)
    
    
}



export default emailRegistro