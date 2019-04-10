<template>
  <div id="start">
  <div id="textWrapper">
  <h2>Die Geschichte</h2>
      <p>Auf Rotund, gab es vor einer sehr langen Zeit viele alte, mächtige und große Völker. Die Völker blieben unter sich und lebten mehr oder weniger harmonisch nebeneinander her. Die Wirtschaft und Kultur aller Völker blühte, sie hatten Nahrung, Land und Rohstoffe. Sie vermehrten sich und entwickelten sich weiter. 
  Mit der Zeit jedoch verbrauchten sie die meisten der Rohstoffe auf Rotund. Sie zerstörten die Wälder, trugen die Berge ab, verdarben den Boden und achteten nicht darauf das Land, in dem sie lebten, zu erhalten. So kam es, dass sie anfingen Hunger zu leiden und plötzlich nicht mehr genug für alle da war. Anstatt gemeinsam nach einer Lösung für dieses Problem zu suchen, begannen sie sich zu bekriegen und um die verbleibenden Rohstoffe zu kämpfen. 
  Familien wurden zerrissen, Verbrechen wurden im Krieg begangen und schon bald ging es nicht mehr bloß um das eigene Überlegen. Vielmehr begannen sich die Völker gegenseitig zu hassen und der Nährboden für einen sehr schnell und tief wurzelnden Rassismus war entstanden. Der Krieg wütete über viele Jahrzehnte und endete in einer großen magischen Katastrophe, die einen Großteil aller Lebewesen auslöschte. 
  Zurück blieben ein paar überlebende, die in zersprengten Gruppen überall auf Rotund lebten, sich fortpflanzten und mehr oder weniger ziellos um ihr Überleben kämpften. So vergangen einige hundert Jahre und die meisten vergaßen, was auf der Welt passiert war. Die kleinen Gruppen wurden mit der Zeit zu kleinen Stämmen und begannen sich ihre Anführer selber zu wählen. Die Stämme wurden zur Familie für ihre Mitglieder und stellten sich gemeinsam gegen die raue Welt in der Magie und Chaos herrschten.
  Einige der Überlebenden entwickelten neue Kulturen, Bräuche und Rituale. Andere versuchten die Traditionen ihrer Ahnen so gut es ging zu erhalten. Manche vergaßen alle Vorurteile, die ihre Ur-Ur-Ur-Ahnen entwickelt hatten, andere hatten leichte Schwierigkeiten sich mit den Nachfahren Fremder Völker anzufreunden. 
  </p>
  <h2>Die Stämme</h2>
  <p>Nach der magischen Katastrophe gibt es auf Rotund keine großen Völker mehr. SO wird Rotund von den Nachfahren einst großer Völker besiedelt. Diese durchstreifen den Kontinent allein, oder finden sich in Stämmen zusammen. Ihr, die Spieler von Tribes of Rotund, seid die Anführer dieser Stämme! Die Kreaturen in eurem Deck sind also mehr als bloße Karten. Sie sind euer Stamm. Ihr tragt die Verantwortung für sie. Mit euren Segen, Flüchen und Zauber könnt ihr eure Stammesmitglieder im Kampf mit anderen Stämmen beschützen und am Leben erhalten. Messt euch mit anderen Stämmen, beschützt euren Stamm und gebt euer bestes um als Stamm einen Platz auf Rotund zu finden.</p>
  <h2>Die Magie</h2>
  <p>Vor der magischen Katastrophe war die Magie in Rotund flüchtig und schwer zu greifen. Magier mussten jahrzehntelang studieren, um sie Formen zu können. Doch durch die magische Katastrophe, die den großen Krieg der Völker beendete, strömte die Magie in jeden Winkel Rotunds und erfüllt seither den ganzen Kontinent. Sie sickert aus jedem Lebewesen und umgibt alles. Es ist leichter sie zu greifen und zu formen. Viele Tiere und Pflanzen haben sich durch sie verändert, die Fabeln, die man sich auf Rotund erzählte, nahmen durch die Magie Gestalt an und wurden real. Die Stammeshäupter der Tribes of Rotund sind oft magisch begabt. Sie verfügen über die Möglichkeit, ihren Stammesmitgliedern mit Segen, Flüchen oder Zaubern zur Seite zu stehen.</p>
</div>
  </div>
</template>

<script>
export default {
  name: 'start'
}
</script>
<!-- styling for the component -->
<style>
#start {
  height: 90vh;
  width: 100%;
  overflow-y: scroll;
  position: relative;
  align-items: center;
}
#textWrapper {
  padding: 1em 10%;
  margin-top: 5%;
}
p {
  
  text-align: justify;
}

@media screen and (max-width: 800px) {
  #start {
    height: 60vh;
  } 
}
</style>