var x1 = 'Commercial Application'
var x2 = 'Defence Application'
var y1, y2
y1 = '            Aerial surveillance, filmmaking, journalism, scientific research, surveying, cargo transport, mining, manufacturing, Forestry, solar farming, thermal energy, ports and agriculture'
y2 = 'Reconnaissance, attack, demining, and target practice'
alert('welcome to drones plante')
var name = prompt("which application drones do you like? defence or commercial")
 if (name == 'commercial') {
   document.write('<h2>' + x1 + '</h2>')
  document.write("<p>" + y1 + "</p>")
 }
 else if (name == 'defence')
  {  document.write('<h2>'+ x2 +'</h2>') 
   document.write("<p>" + y2 + "</p>")
 }

 else {
  var name = prompt("please type commercial or defence")}