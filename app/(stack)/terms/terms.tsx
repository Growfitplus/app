import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';

import Typography from '@/components/Typography';
import Container from '@/components/Container';
import { InfoSVG } from '@/components/SVG';

const Terms = () => {
  return (
    <ScrollView style={styles.main}>
      <Container customStyles={styles.container}>
        <InfoSVG
          width={24}
          height={24}
        />
        <Typography
          weight='bold'
          styles={styles.title}
        >
          Sobre Growfit+
        </Typography>
        <Typography
          weight='bold'
          styles={styles.subtitle}
        >
          TÉRMINOS Y CONDICIONES
        </Typography>
        <Typography
          weight='bold'
          styles={styles.vignette}
        >
          1. EN GENERAL
        </Typography>
        <Typography
          weight='regular'
          styles={styles.content}
        >
          1.1 Al utilizar el Servicio, usted está aceptando estar sujeto a estos Términos de
          Servicio, lo que significa que ha leído y comprendido los términos en su totalidad.
        </Typography>
        <Typography
          weight='regular'
          styles={styles.content}
        >
          1.2 Los términos pueden cambiar en cualquier momento, por lo que es su responsabilidad
          revisarlos regularmente para mantenerse informado de las actualizaciones.
        </Typography>
        <Typography
          weight='regular'
          styles={styles.content}
        >
          1.3 Si no está de acuerdo con los Términos, no puede utilizar el Servicio.
        </Typography>
        <Typography
          weight='regular'
          styles={styles.content}
        >
          1.4 El usuario debe consultar con un médico antes de usar el servicio y seguir el consejo
          médico, ya que el servicio no sustituye la atención médica profesional.
        </Typography>
        <Typography
          weight='regular'
          styles={styles.content}
        >
          1.5 El uso del servicio no crea una relación médico-paciente, terapeuta-paciente u otro
          profesional sanitario entre el usuario y la empresa.
        </Typography>
        <Typography
          weight='bold'
          styles={styles.vignette}
        >
          2. RESPONSABILIDADES DEL USUARIO
        </Typography>
        <Typography
          weight='regular'
          styles={styles.content}
        >
          2.1 Eres mayor de edad según lo establecido por tu país de residencia. El servicio no está
          destinado a ser utilizado por personas menores de 18 años.
        </Typography>
        <Typography
          weight='regular'
          styles={styles.content}
        >
          2.2 Renunciamos a los daños indirectos. En ningún caso seremos responsables ante usted o
          algún otro tercero por daños indirectos, especiales, incidentales, punitivos o
          consecuentes, incluida la pérdida de dinero, ingresos o datos, o por el costo de obtener
          productos o servicios sustitutos que surjan de o en conexión con estos términos, el
          servicio o cualquier producto o servicio obtenido a través del servicio.
        </Typography>
        <Typography
          weight='regular'
          styles={styles.content}
        >
          2.3 Si proporcionas información falsa, inexacta, no actual o incompleta, nos reservamos el
          derecho de rechazar cualquier uso actual o futuro del Servicio.
        </Typography>
        <Typography
          weight='regular'
          styles={styles.content}
        >
          2.4 No puedes utilizar el Servicio para ningún otro propósito que no sea el que se pone a
          disposición.
        </Typography>
        <Typography
          weight='bold'
          styles={styles.vignette}
        >
          3. RECOPILACIÓN Y USO DE INFORMACIÓN
        </Typography>
        <Typography
          weight='regular'
          styles={styles.content}
        >
          3.1 Al utilizar nuestro servicio, se recopilará y utilizará información personal de
          acuerdo con nuestras políticas de privacidad. Esto puede incluir, pero no se limita a, su
          nombre, dirección de correo electrónico, dirección postal y otra información de contacto.
        </Typography>
        <Typography
          weight='regular'
          styles={styles.content}
        >
          3.2 Utilizamos esta información para proporcionarle el servicio, responder a sus
          solicitudes, enviarle información sobre el servicio y procesar pagos, si corresponde.
        </Typography>
        <Typography
          weight='regular'
          styles={styles.content}
        >
          3.3 Podemos compartir información personal con terceros de confianza que nos ayudan a
          proporcionar y mejorar nuestro servicio, como proveedores de servicios de pago,
          proveedores de alojamiento web y proveedores de servicios de marketing por correo
          electrónico.
        </Typography>
        <Typography
          weight='regular'
          styles={styles.content}
        >
          3.4 Si no desea recibir comunicaciones de marketing de nuestra parte, puede optar por no
          recibirlas en cualquier momento.
        </Typography>
        <Typography
          weight='regular'
          styles={styles.content}
        >
          3.5 Nos reservamos el derecho de modificar esta política en cualquier momento. Cualquier
          cambio se publicará en nuestra app y se aplicará a la información recopilada después de la
          fecha en que se publique el cambio.
        </Typography>
        <Typography
          weight='bold'
          styles={styles.vignette}
        >
          4. MODIFICACIONES E INTERRUPCIONES
        </Typography>
        <Typography
          weight='regular'
          styles={styles.content}
        >
          4.1 Nos reservamos el derecho de modificar, suspender o descontinuar el Servicio en
          cualquier momento sin previo aviso.
        </Typography>
        <Typography
          weight='regular'
          styles={styles.content}
        >
          4.2 No seremos responsables por cualquier modificación o interrupción del servicio.
        </Typography>
        <Typography
          weight='regular'
          styles={styles.content}
        >
          4.3 No garantizamos la disponibilidad del Servicio en todo momento.
        </Typography>
        <Typography
          weight='regular'
          styles={styles.content}
        >
          4.4 No somos responsables de cualquier pérdida o daño causado por la incapacidad de
          acceder o utilizar el Servicio durante cualquier interrupción del Servicio.
        </Typography>
        <Typography
          weight='regular'
          styles={styles.content}
        >
          4.5 Podría haber información con errores tipográficos, inexactitudes u omisiones en el
          Servicio. Nos reservamos el derecho de modificar o corregir cualquier error, inexactitud u
          omisión en cualquier momento sin previo aviso.
        </Typography>
        <Typography
          weight='bold'
          styles={styles.vignette}
        >
          5. DETALLES DE CONTACTO
        </Typography>
        <Typography
          weight='regular'
          styles={styles.content}
        >
          Si desea enviar algún aviso en virtud de estos Términos o tiene alguna pregunta sobre el
          Servicio, puede comunicarse con nosotros a través de: contacto@growfitplus.com.
        </Typography>
        <Typography
          weight='regular'
          styles={styles.content}
        >
          HE LEÍDO ESTOS TÉRMINOS Y ACEPTO TODAS LAS DISPOSICIONES CONTENIDAS ANTERIORMENTE.
        </Typography>
        <Typography
          weight='regular'
          styles={styles.content}
        >
          Última actualización: 26 de noviembre del 2024
        </Typography>
      </Container>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 32,
  },
  content: {
    fontSize: 10,
    marginBottom: 12,
  },
  main: {
    flex: 1,
  },
  subtitle: {
    fontSize: 14,
  },
  title: {
    fontSize: 24,
    marginVertical: 20,
  },

  vignette: {
    fontSize: 12,
    marginVertical: 20,
  },
});

export default Terms;
