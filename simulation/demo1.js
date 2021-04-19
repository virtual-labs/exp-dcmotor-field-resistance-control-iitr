var createGraph = document.querySelector('.createGraph');
    var trace1 = {
      x: [],
      y: [],
      type: 'scatter'
  };


function btntable(){
    var percent= document.getElementById('slider').value;
    var db1="0.1";
    var db2="0.2";
    var db3="0.3";
    var db4="0.4";
    var db5="0.5";
    var db6="0.6";
    var db7="0.7";
    var db8="0.8";
    var db9="0.9";
    var db10="1";
    var speedometer="0";
      
       if(percent==0)
      {
        document.getElementById('rotor_part_2').style.animation="rotation 0s infinite linear";
      }

       else if(percent==1)
      {
        percent=db1;
        speedometer="2500";
        document.getElementById('rotor_part_2').style.animation="rotation 0.3s infinite linear";
      }
      else if(percent==2)
      {
      percent = db2;
      speedometer="2340";
        document.getElementById('rotor_part_2').style.animation="rotation 0.6s infinite linear";
      }
      else if(percent==3)
      {
      percent = db3;
      speedometer="2100";
      document.getElementById('rotor_part_2').style.animation="rotation 1.0s infinite linear";
      }
      else if(percent==4)
      {
      percent = db4;
      speedometer="1930";
      document.getElementById('rotor_part_2').style.animation="rotation 1.3s infinite linear";
      }
      else if(percent==5)
      {
      percent = db5;
      speedometer="1700";
      document.getElementById('rotor_part_2').style.animation="rotation 1.6s infinite linear";
      }
      else if(percent==6)
      {
      percent = db6;
      speedometer="1575";
      document.getElementById('rotor_part_2').style.animation="rotation 2.0s infinite linear";
      }
      else if(percent==7)
      {
      percent = db7;
      speedometer="1480";
      document.getElementById('rotor_part_2').style.animation="rotation 2.7s infinite linear";
      }
      else if(percent==8)
      {
      percent = db8;
      speedometer="1400";
      document.getElementById('rotor_part_2').style.animation="rotation 3.1s infinite linear";
      }
      else if(percent==9)
      {
      percent = db9;
      speedometer="1270";
      document.getElementById('rotor_part_2').style.animation="rotation 3.5s infinite linear";
      }
      else if(percent==10)
      {
      percent = db10;
      speedometer="1015";
      document.getElementById('rotor_part_2').style.animation="rotation 3.9s infinite linear";
      }
    var table = document.getElementById("myTable");

    var row = table.insertRow(-1);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    cell1.innerHTML = percent;
    cell2.innerHTML =speedometer ;
    counter++;
           
    trace1.x.push(cell1.innerHTML);
    trace1.y.push(cell2.innerHTML);
            
}
var counter=0;
function makegraph()
{   
  if(counter<6)
    {
      alert("Please take atleast 6 readings.");
    }
  else
  {

      var data = [trace1];
      Plotly.newPlot('myDiv', data,{}, {showSendToCloud: true});
  }
    

}
var rightconnection=false;
var offstate=true;

function changeImage()
{   
    if(rightconnection==false)
    {
        alert("Please complete connection first.");
    }
    else
    {
        if (offstate==true)
        {
            offstate=false;
            document.getElementById('mcb_off').src='mcbon.png';
            document.getElementById("led_l").src="push2.png";
            document.getElementById("led_f").src="push2.png";
            document.getElementById("led_a").src="push2.png";
            document.getElementById("slider").disabled=true;
            document.getElementById("slider_1").disabled=false;
            document.getElementById("check-button").disabled=true;
         
        }
        else
        {
            offstate=true;
            document.getElementById('mcb_off').src='mcboff.png';
            changeImage();
        }
    }
    
    
}

function slidealert(){
    if (offstate==true) {
        alert('Turn on MCB.');
        document.getElementById("slider").disabled=true;
        document.getElementById("slider_1").disabled=true;
    }
}

function currentValue_below() {
    var count=0;
    var slide=document.getElementById('slider').value;
    alert(slide);
    var bool = document.getElementById('check-button');
    if(bool.disabled){
       var upper_slider=document.getElementById("slider_1");
    if(upper_slider.disabled==false){
      alert("Set voltmeter value first");
    } 
    }
    else if(bool.disabled==false){
        alert("Make Connections First");
        return;
    }
    

}

document.getElementById('slider').onchange = function () {
    var value = document.getElementById('slider').value;
    var bool_slider=document.getElementById('slider');
    var db1="0.1";
    var db2="0.2";
    var db3="0.3";
    var db4="0.4";
    var db5="0.5";
    var db6="0.6";
    var db7="0.7";
    var db8="0.8";
    var db9="0.9";
    var db10="1";
    var speedometer="0";
        
        if(value==0)
      {
        document.getElementById('rotor_part_2').style.animation="rotation 0s infinite linear";
      } 
      else if(value==1)
      {
        value=db1;
        speedometer="2500";
        document.getElementById('rotor_part_2').style.animation="rotation 0.3s infinite linear";
      }
      else if(value==2)
      {
      value = db2;
      speedometer="2340";
      document.getElementById('rotor_part_2').style.animation="rotation 0.6s infinite linear";
      }
      else if(value==3)
      {
      value = db3;
      speedometer="2100";
      document.getElementById('rotor_part_2').style.animation="rotation 1.0s infinite linear";
      }
      else if(value==4)
      {
      value = db4;
      speedometer="1930";
      document.getElementById('rotor_part_2').style.animation="rotation 1.3s infinite linear";
      }
      else if(value==5)
      {
      value = db5;
      speedometer="1700";
      document.getElementById('rotor_part_2').style.animation="rotation 1.6s infinite linear";
      }
      else if(value==6)
      {
      value = db6;
      speedometer="1575";
      document.getElementById('rotor_part_2').style.animation="rotation 2.0s infinite linear";
      }
      else if(value==7)
      {
      value = db7;
      speedometer="1480";
      document.getElementById('rotor_part_2').style.animation="rotation 2.7s infinite linear";
      }
      else if(value==8)
      {
      value = db8;
      speedometer="1400";
      document.getElementById('rotor_part_2').style.animation="rotation 3.1s infinite linear";
      }

       else if(value==9)
      {
      value = db9;
      speedometer="1270";
      document.getElementById('rotor_part_2').style.animation="rotation 3.5s infinite linear";
      }
       else if(value==10)
      {
      value = db10;
      speedometer="1015";
      document.getElementById('rotor_part_2').style.animation="rotation 3.9s infinite linear";
      }

      if(bool_slider.disabled==false){
        var rangeClock =  document.querySelector('#niddle_1');
          if(value==0)
        {
            rangeClock.style.transform = 'rotate( ' + -60 + 'deg)';
            document.getElementById('text_2').value='0 A';
            document.getElementById('currentPointerValue').innerHTML='<b>Speedo Meter <span> &nbsp;&nbsp;&nbsp; 0</span></b>';
            
        }
        else if(value==0.1){
            rangeClock.style.transform = 'rotate(' + ((-8 + value )/2) + 'deg)';
            document.getElementById('text_2').value=value +' A';
            document.getElementById('currentPointerValue').innerHTML='<b>Speedo Meter <span> &nbsp;&nbsp;&nbsp;' + speedometer + '</span></b>';
        }

        else if(value==0.2){
            rangeClock.style.transform = 'rotate(' + ((-6 + value )/2) + 'deg)';
            document.getElementById('text_2').value=value +' A';
            document.getElementById('currentPointerValue').innerHTML='<b>Speedo Meter <span> &nbsp;&nbsp;&nbsp;' + speedometer + '</span></b>';
        }

        else if(value==0.3){
            rangeClock.style.transform = 'rotate(' + ((-4 + value )/2) + 'deg)';
            document.getElementById('text_2').value=value +' A';
            document.getElementById('currentPointerValue').innerHTML='<b>Speedo Meter <span> &nbsp;&nbsp;&nbsp;' + speedometer + '</span></b>';
        }

        else if(value==0.4){
            rangeClock.style.transform = 'rotate(' + ((-2 + value )/2) + 'deg)';
            document.getElementById('text_2').value=value +' A';
            document.getElementById('currentPointerValue').innerHTML='<b>Speedo Meter <span> &nbsp;&nbsp;&nbsp;' + speedometer + '</span></b>';
        }

        else if(value==0.5){
            rangeClock.style.transform = 'rotate(' + ((0 + value )/2) + 'deg)';
            document.getElementById('text_2').value=value +' A';
            document.getElementById('currentPointerValue').innerHTML='<b>Speedo Meter <span> &nbsp;&nbsp;&nbsp;' + speedometer + '</span></b>';
        }

        else if(value==0.6){
            rangeClock.style.transform = 'rotate(' + ((2 + value )/2) + 'deg)';
            document.getElementById('text_2').value=value +' A';
            document.getElementById('currentPointerValue').innerHTML='<b>Speedo Meter <span> &nbsp;&nbsp;&nbsp;' + speedometer + '</span></b>';
        }

        else if(value==0.7){
            rangeClock.style.transform = 'rotate(' + ((4 + value )/2) + 'deg)';
            document.getElementById('text_2').value=value +' A';
            document.getElementById('currentPointerValue').innerHTML='<b>Speedo Meter <span> &nbsp;&nbsp;&nbsp;' + speedometer + '</span></b>';
        }

        else if(value==0.8){
            rangeClock.style.transform = 'rotate(' + ((6 + value )/2) + 'deg)';
            document.getElementById('text_2').value=value +' A';
            document.getElementById('currentPointerValue').innerHTML='<b>Speedo Meter <span> &nbsp;&nbsp;&nbsp;' + speedometer + '</span></b>';
        }

        else if(value==0.9){
            rangeClock.style.transform = 'rotate(' + ((8 + value )/2) + 'deg)';
            document.getElementById('text_2').value=value +' A';
            document.getElementById('currentPointerValue').innerHTML='<b>Speedo Meter <span> &nbsp;&nbsp;&nbsp;' + speedometer + '</span></b>';
        }

        else if(value==1){
            rangeClock.style.transform = 'rotate(' + ((10 + value )/2) + 'deg)';
            document.getElementById('text_2').value=value +' A';
            document.getElementById('currentPointerValue').innerHTML='<b>Speedo Meter <span> &nbsp;&nbsp;&nbsp;' + speedometer + '</span></b>';
        }



      }

     };

function currentValue_fixed() {
    var count=0;
    var slide=document.getElementById('slider_1').value;
    var bool = document.getElementById('check-button');
    if(bool.disabled){
    }
    else if(bool.disabled==false){
        alert("Make Connections First");
        return;
    }
    if(count !=slide){
        document.getElementById('slider_1').disabled=true;
    }
    if(slide!=0){
        var rangeClock2 =  document.querySelector('#niddle');
        rangeClock2.style.transform = 'rotate(' + 30 + 'deg)';
        document.getElementById('text_1').value='220 V';
    }
    var upper_slider=document.getElementById("slider_1");
    if (upper_slider.disabled) {
              document.getElementById("slider").disabled=false;
              document.getElementById("button").disabled=false;
            }
}




function func(){
    document.getElementById("slider").disabled=true;
    document.getElementById("slider_1").disabled=true;
    // document.getElementById('myimage').addEventListener("click",connectionerror);
    // document.getElementById('myimage').removeAttribute("onclick");
    document.getElementById('slider').disabled=true;
    document.getElementById('slider').addEventListener("click",slidealert);
    document.getElementById('slider').removeAttribute("onclick");
    document.getElementById('slider_1').addEventListener("click",currentValue_fixed);
    document.getElementById('slider_1').removeAttribute("onclick");
    document.getElementById('slider_1').disabled=true;    
    /*document.getElementById('niddle_1').style.Webtransform="rotate(-69.5deg)";
    document.getElementById("niddle_1").style.WebkitTransformOrigin = "30% 50%";
    document.getElementById('niddle_1').style.msTransform="rotate(-69.5deg)";
    document.getElementById("niddle_1").style.msTransformOrigin = "30% 50%";
    document.getElementById('niddle_1').style.transform="rotate(-69.5deg)";
    document.getElementById("niddle_1").style.transformOrigin = "30% 50%";
    document.getElementById('niddle').style.transform="rotate(-69.5deg)";*/
    document.getElementById('text_1').disabled=true;
    document.getElementById('text_1').value='0 V';
    document.getElementById('text_2').disabled=true;
    document.getElementById('text_2').value='0 A';
}






jsPlumb.ready(function () {

    var instance,
        discs = [],

        addDisc = function (evt) {
            var info = createDisc();
            var e = prepare(info.id);
            instance.draggable(info.id);
            discs.push(info.id);
            evt.stopPropagation();
            evt.preventDefault();
        },

        reset = function (e) {
            for (var i = 0; i < discs.length; i++) {
                var d = document.getElementById(discs[i]);
                if (d) d.parentNode.removeChild(d);
            }
            discs = [];
            e.stopPropagation();
            e.preventDefault();
        },

        initAnimation = function (elId) {
            var el = document.getElementById(elId);
            instance.on(el, 'click', function (e, ui) {
                if (el.className.indexOf("jsPlumb_dragged") > -1) {

                    jsPlumb.removeClass(elId, "jsPlumb_dragged");
                    return;
                }

            });
        },

    // notice there are no dragOptions specified here, which is different from the
    // draggableConnectors2 demo.  all connections on this page are therefore
    // implicitly in the default scope.
         endpoint = {
            anchor: [0.5, 0.5, 0, -1],
            connectorStyle: { strokeWidth: 4, stroke: "rgb(255, 0, 0)" },
            endpointsOnTop: true,
            isSource: true,
            maxConnections: 10,
            isTarget: true,
            dropOptions: { tolerance: "touch", hoverClass: "dropHover" }
        },

        prepare = function (elId) {
            initAnimation(elId);
            return instance.addEndpoint(elId, endpoint);
        },
        endpoint2 = {
            anchor: [0.5, 0.5, 0, -1],
            connectorStyle: { strokeWidth: 4, stroke: "rgb(0, 255, 0)" },
            endpointsOnTop: true,
            isSource: true,
            maxConnections: 10,
            isTarget: true,
            dropOptions: { tolerance: "touch", hoverClass: "dropHover" }
        },

        prepare2 = function (elId) {
            initAnimation(elId);
            return instance.addEndpoint(elId, endpoint2);
        },
        endpoint3 = {
            anchor: [0.5, 0.5, 0, -1],
            connectorStyle: { strokeWidth: 4, stroke: "rgb(0, 0, 255)" },
            endpointsOnTop: true,
            isSource: true,
            maxConnections: 10,
            isTarget: true,
            dropOptions: { tolerance: "touch", hoverClass: "dropHover" }
        },

        prepare3 = function (elId) {
            initAnimation(elId);
            return instance.addEndpoint(elId, endpoint3);
        },

    // this is overridden by the YUI demo.
        createDisc = function () {
            var d = document.createElement("div");
            d.className = "bigdot";
            document.getElementById("animation-demo").appendChild(d);
            var id = '' + ((new Date().getTime()));
            d.setAttribute("id", id);
            var w = screen.width - 162, h = screen.height - 200;
            var x = (5 * w) + Math.floor(Math.random() * (10 * w));
            var y = (5 * h) + Math.floor(Math.random() * (10 * h));
            d.style.top = y + 'px';
            d.style.left = x + 'px';
            return {d: d, id: id};
        };

    // get a jsPlumb instance, setting some appropriate defaults and a Container.
    instance = jsPlumb.getInstance({
        DragOptions: { cursor: 'wait', zIndex: 20 },
        Endpoint: [ "Image", { url: "littledot.png" } ],
        Connector: [ "Bezier", { curviness: -90 } ],
        Container: "canvas"
    });

    // suspend drawing and initialise.
    instance.batch(function () {
        var e1 = prepare("ld1"),
            e2 = prepare("ld2"),
            e3 = prepare3("ld3"),
            e4 = prepare3("ld4"),
            e5 = prepare3("ld5"),
            e6 = prepare2("ld6"),
            e7 = prepare2("ld7"),
            e8 = prepare2("ld8"),
            e9 = prepare2("ld9"),
            e10 = prepare3("ld10"),
            e11 = prepare3("ld11"),
            e12 = prepare3("ld12"),
            e13 = prepare3("ld13"),
            e14 = prepare3("ld14"),
            e15 = prepare3("ld15"),
            e16 = prepare3("ld16"),
            e17 = prepare3("ld17"),



            clearBtn = jsPlumb.getSelector("#anim-clear"),

            addBtn = jsPlumb.getSelector("#add");

         var detachLinks = jsPlumb.getSelector(".littledot .detach");
            instance.on(detachLinks, "click", function (e) {
                instance.deleteConnectionsForElement(this.getAttribute("rel"));
                jsPlumbUtil.consume(e);
            });

            instance.on(document.getElementById("clear"), "click", function (e) {
                instance.detachEveryConnection();
                showConnectionInfo("");
                jsPlumbUtil.consume(e);
            });
    });

    jsPlumb.fire("jsPlumbDemoLoaded", instance);

    document.getElementById("check-button").addEventListener("click", function () {

        //var d = instance.exportData();
        //console.log(instance.getAllConnections());

        var correct_connections_1_12 = [
            {
                "source": "ld1",
                "target": "ld12"
            },

            {
                "source": "ld12",
                "target": "ld1"
            }
        ];

        var correct_connections_1_13 = [
            {
                "source": "ld1",
                "target": "ld13"
            },
    
            {
                "source": "ld13",
                "target": "ld1"
            }
        ];

        var correct_connections_1_15 = [
            {
                "source": "ld1",
                "target": "ld15"
            },
    
            {
                "source": "ld15",
                "target": "ld1"
            }
        ];

        var correct_connections_2_3 = [
            {
                "source": "ld2",
                "target": "ld3"
            },
    
            {
                "source": "ld3",
                "target": "ld2"
            }
        ];

        var correct_connections_6_17 = [
            {
                "source": "ld6",
                "target": "ld17"
            },
    
            {
                "source": "ld17",
                "target": "ld6"
            }

        ];



        var correct_connections_7_11 = [
            {
                "source": "ld7",
                "target": "ld11"
            },
    
            {
                "source": "ld11",
                "target": "ld7"
            }
        
        ];

        var correct_connections_8_5 = [
            {
                "source": "ld8",
                "target": "ld5"
            },
    
            {
                "source": "ld5",
                "target": "ld8"
            }
        
        ];

        var correct_connections_9_14 = [
            {
                "source": "ld9",
                "target": "ld14"
            },
    
            {
                "source": "ld14",
                "target": "ld9"
            }
        
        ];

        var correct_connections_9_10 = [
            {
                "source": "ld9",
                "target": "ld10"
            },
    
            {
                "source": "ld10",
                "target": "ld9"
            }
        
        ];

        var correct_connections_14_10 = [
            {
                "source": "ld14",
                "target": "ld10"
            },
    
            {
                "source": "ld10",
                "target": "ld14"
            }
        
        ];

        var correct_connections_4_16 = [
            {
                "source": "ld4",
                "target": "ld16"
            },
    
            {
                "source": "ld16",
                "target": "ld4"
            }
        
        ];

        //a connection outside this will invalidate the circuit
        var allowed_connections = [
            {
                "source": "ld1",
                "target": "ld12"
            },
    
            {
                "source": "ld12",
                "target": "ld1"
            },
            
            {
                "source": "ld1",
                "target": "ld13"
            },

            {
                "source": "ld13",
                "target": "ld1"
            },

            {
                "source": "ld1",
                "target": "ld15"
            },

            {
                "source": "ld15",
                "target": "ld1"
            },

            {
                "source": "ld2",
                "target": "ld3"
            },

            {
                "source": "ld3",
                "target": "ld2"
            },

            {
                "source": "ld6",
                "target": "ld17"
            },

            {
                "source": "ld17",
                "target": "ld6"
            },






            {
                "source": "ld7",
                "target": "ld11"
            },

            {
                "source": "ld11",
                "target": "ld7"
            },

            {
                "source": "ld8",
                "target": "ld5"
            },

            {
                "source": "ld5",
                "target": "ld8"
            },

            {
                "source": "ld9",
                "target": "ld14"
            },

            {
                "source": "ld14",
                "target": "ld9"
            },

            {
                "source": "ld9",
                "target": "ld10"
            },

            {
                "source": "ld10",
                "target": "ld9"
            },

            {
                "source": "ld14",
                "target": "ld10"
            },

            {
                "source": "ld10",
                "target": "ld14"
            },

            {
                "source": "ld4",
                "target": "ld16"
            },

            {
                "source": "ld16",
                "target": "ld4"
            },
        ];

        var actual_connections = instance.getAllConnections();

        var is_connected_1_12 = false;
        var is_connected_1_13 = false;
        var is_connected_1_15 = false;
        var is_connected_2_3 = false;
        var is_connected_6_17 = false;

        var is_connected_7_11 = false;
        var is_connected_8_5 = false;
        var is_connected_9_14 = false;
        var is_connected_9_10 = false;
        var is_connected_14_10 = false;
        var is_connected_4_16 = false;

        var unallowed_connection_present = false;

        //checking for 1_12 connection
        actual_connections.forEach(function (connection) {
            var this_connection = {
                "source": connection.sourceId,
                "target": connection.targetId
            };

            if(!is_connected_1_12){
                is_connected_1_12 = correct_connections_1_12.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                  });
            }

           if(!unallowed_connection_present){
                unallowed_connection_present = !allowed_connections.find(function (conn) {
                    return conn.source == this_connection.source && conn.target === this_connection.target;
                });
            }
            // if this_connection exists in correct_connections
            // remove this connection from correct ones
            // continue
            // else
            // return false
        });

        //checking for 1_13 connection
        actual_connections.forEach(function (connection) {
            var this_connection = {
                "source": connection.sourceId,
                "target": connection.targetId
            };

            if(!is_connected_1_13){
                is_connected_1_13 = correct_connections_1_13.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                });
            }
            if(!unallowed_connection_present){
                unallowed_connection_present = !allowed_connections.find(function (conn) {
                    return conn.source == this_connection.source && conn.target === this_connection.target;
                });
            }
              // if this_connection exists in correct_connections
            // remove this connection from correct ones
            // continue
            // else
            // return false
        });

        //checking for 1_15 connection
        actual_connections.forEach(function (connection) {
            var this_connection = {
                "source": connection.sourceId,
                "target": connection.targetId
            };

            if(!is_connected_1_15){
                is_connected_1_15 = correct_connections_1_15.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                  });
            }

           if(!unallowed_connection_present){
                unallowed_connection_present = !allowed_connections.find(function (conn) {
                    return conn.source == this_connection.source && conn.target === this_connection.target;
                });
            }
            // if this_connection exists in correct_connections
            // remove this connection from correct ones
            // continue
            // else
            // return false
        });

        //checking for 2_3 connection
        actual_connections.forEach(function (connection) {
            var this_connection = {
                "source": connection.sourceId,
                "target": connection.targetId
            };

            if(!is_connected_2_3){
                is_connected_2_3 = correct_connections_2_3.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                  });
            }

           if(!unallowed_connection_present){
                unallowed_connection_present = !allowed_connections.find(function (conn) {
                    return conn.source == this_connection.source && conn.target === this_connection.target;
                });
            }
            // if this_connection exists in correct_connections
            // remove this connection from correct ones
            // continue
            // else
            // return false
        });

        //checking for 6_17 connection
        actual_connections.forEach(function (connection) {
            var this_connection = {
                "source": connection.sourceId,
                "target": connection.targetId
            };

            if(!is_connected_6_17){
                is_connected_6_17 = correct_connections_6_17.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                  });
            }

           if(!unallowed_connection_present){
                unallowed_connection_present = !allowed_connections.find(function (conn) {
                    return conn.source == this_connection.source && conn.target === this_connection.target;
                });
            }
            // if this_connection exists in correct_connections
            // remove this connection from correct ones
            // continue
            // else
            // return false
        });





        //checking for 7_11 connection
        actual_connections.forEach(function (connection) {
            var this_connection = {
                "source": connection.sourceId,
                "target": connection.targetId
            };

            if(!is_connected_7_11){
                is_connected_7_11 = correct_connections_7_11.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                  });
            }

           if(!unallowed_connection_present){
                unallowed_connection_present = !allowed_connections.find(function (conn) {
                    return conn.source == this_connection.source && conn.target === this_connection.target;
                });
            }
            // if this_connection exists in correct_connections
            // remove this connection from correct ones
            // continue
            // else
            // return false
        });

        //checking for 8_5 connection
        actual_connections.forEach(function (connection) {
            var this_connection = {
                "source": connection.sourceId,
                "target": connection.targetId
            };

            if(!is_connected_8_5){
                is_connected_8_5 = correct_connections_8_5.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                  });
            }

           if(!unallowed_connection_present){
                unallowed_connection_present = !allowed_connections.find(function (conn) {
                    return conn.source == this_connection.source && conn.target === this_connection.target;
                });
            }
            // if this_connection exists in correct_connections
            // remove this connection from correct ones
            // continue
            // else
            // return false
        });

        //checking for 9_14 connection
        actual_connections.forEach(function (connection) {
            var this_connection = {
                "source": connection.sourceId,
                "target": connection.targetId
            };

            if(!is_connected_9_14){
                is_connected_9_14 = correct_connections_9_14.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                  });
            }

           if(!unallowed_connection_present){
                unallowed_connection_present = !allowed_connections.find(function (conn) {
                    return conn.source == this_connection.source && conn.target === this_connection.target;
                });
            }
            // if this_connection exists in correct_connections
            // remove this connection from correct ones
            // continue
            // else
            // return false
        });

        //checking for 9_10 connection
        actual_connections.forEach(function (connection) {
            var this_connection = {
                "source": connection.sourceId,
                "target": connection.targetId
            };

            if(!is_connected_9_10){
                is_connected_9_10 = correct_connections_9_10.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                  });
            }

           if(!unallowed_connection_present){
                unallowed_connection_present = !allowed_connections.find(function (conn) {
                    return conn.source == this_connection.source && conn.target === this_connection.target;
                });
            }
            // if this_connection exists in correct_connections
            // remove this connection from correct ones
            // continue
            // else
            // return false
        });

        //checking for 14_10 connection
        actual_connections.forEach(function (connection) {
            var this_connection = {
                "source": connection.sourceId,
                "target": connection.targetId
            };

            if(!is_connected_14_10){
                is_connected_14_10 = correct_connections_14_10.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                  });
            }

           if(!unallowed_connection_present){
                unallowed_connection_present = !allowed_connections.find(function (conn) {
                    return conn.source == this_connection.source && conn.target === this_connection.target;
                });
            }
            // if this_connection exists in correct_connections
            // remove this connection from correct ones
            // continue
            // else
            // return false
        });

        //checking for 4_16 connection
        actual_connections.forEach(function (connection) {
            var this_connection = {
                "source": connection.sourceId,
                "target": connection.targetId
            };

            if(!is_connected_4_16){
                is_connected_4_16 = correct_connections_4_16.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                  });
            }

           if(!unallowed_connection_present){
                unallowed_connection_present = !allowed_connections.find(function (conn) {
                    return conn.source == this_connection.source && conn.target === this_connection.target;
                });
            }
            // if this_connection exists in correct_connections
            // remove this connection from correct ones
            // continue
            // else
            // return false
        });



        if (is_connected_1_12&& is_connected_1_13 && is_connected_1_15 && is_connected_2_3 && is_connected_6_17 && is_connected_7_11 && is_connected_8_5 && is_connected_9_14 && is_connected_9_10 && is_connected_14_10 && is_connected_4_16  && !unallowed_connection_present) 
        {
            fnccheck();
            rightconnection=true;
            alert("Correct connection proceed to take readings.");
            document.getElementById("mcb_off").disabled = false;
            document.getElementById("slider").disabled=true;
            document.getElementById("rem1").remove();
            document.getElementById("rem2").remove();
            document.getElementById("rem3").remove();
            document.getElementById("rem4").remove();
            document.getElementById("rem5").remove();
            document.getElementById("rem6").remove();
            document.getElementById("rem7").remove();
            document.getElementById("rem8").remove();
            document.getElementById("rem9").remove();
            document.getElementById("rem10").remove();
            document.getElementById("rem11").remove();
            document.getElementById("rem12").remove();
            document.getElementById("rem13").remove();
            document.getElementById("rem14").remove();
            document.getElementById("rem15").remove();
            document.getElementById("rem16").remove();
            document.getElementById("rem17").remove();
            
            

            } 
        else {
            //document.getElementById("mcb_off").disabled = true;
            alert("Incorrect Connections.");
            return;
            } 
    });

});

function fnccheck()
{

    jsPlumb.ready(function () {

    var instance,
        discs = [],

        addDisc = function (evt) {
            var info = createDisc();
            var e = prepare(info.id);
            instance.draggable(info.id);
            discs.push(info.id);
            evt.stopPropagation();
            evt.preventDefault();
        },

        reset = function (e) {
            for (var i = 0; i < discs.length; i++) {
                var d = document.getElementById(discs[i]);
                if (d) d.parentNode.removeChild(d);
            }
            discs = [];
            e.stopPropagation();
            e.preventDefault();
        },

        initAnimation = function (elId) {
            var el = document.getElementById(elId);
            instance.on(el, 'click', function (e, ui) {
                if (el.className.indexOf("jsPlumb_dragged") > -1) {

                    jsPlumb.removeClass(elId, "jsPlumb_dragged");
                    return;
                }

            });
        },

    // notice there are no dragOptions specified here, which is different from the
    // draggableConnectors2 demo.  all connections on this page are therefore
    // implicitly in the default scope.
         endpoint = {
            anchor: [0.5, 0.5, 0, -1],
            connectorStyle: { strokeWidth: 4, stroke: "rgb(0, 0, 255)" },
            endpointsOnTop: true,
            isSource: false,
            maxConnections: 10,
            isTarget: true,
            dropOptions: { tolerance: "touch", hoverClass: "dropHover" }
        },

        prepare = function (elId) {
            initAnimation(elId);
            return instance.addEndpoint(elId, endpoint);
        },

    // this is overridden by the YUI demo.
        createDisc = function () {
            var d = document.createElement("div");
            d.className = "bigdot";
            document.getElementById("animation-demo").appendChild(d);
            var id = '' + ((new Date().getTime()));
            d.setAttribute("id", id);
            var w = screen.width - 162, h = screen.height - 200;
            var x = (5 * w) + Math.floor(Math.random() * (10 * w));
            var y = (5 * h) + Math.floor(Math.random() * (10 * h));
            d.style.top = y + 'px';
            d.style.left = x + 'px';
            return {d: d, id: id};
        };

    // get a jsPlumb instance, setting some appropriate defaults and a Container.
    instance = jsPlumb.getInstance({
        DragOptions: { cursor: 'wait', zIndex: 20 },
        Endpoint: [ "Image", { url: "littledot.png" } ],
        Connector: [ "Bezier", { curviness: -90 } ],
        Container: "canvas"
    });

    // suspend drawing and initialise.
    instance.batch(function () {
        var e1 = prepare("ld1"),
            e2 = prepare("ld2"),
            e3 = prepare("ld3"),
            e4 = prepare("ld4"),
            e5 = prepare("ld5"),
            e6 = prepare("ld6"),
            e7 = prepare("ld7"),
            e8 = prepare("ld8"),
            e9 = prepare("ld9"),
            e10 = prepare("ld10"),
            e11 = prepare("ld11"),
            e12 = prepare("ld12"),
            e13 = prepare("ld13"),
            e14 = prepare("ld14"),
            e15 = prepare("ld15"),
            e16 = prepare("ld16"),
            e17 = prepare("ld17"),



            clearBtn = jsPlumb.getSelector("#anim-clear"),

            addBtn = jsPlumb.getSelector("#add");

         var detachLinks = jsPlumb.getSelector(".littledot .detach");
            instance.on(detachLinks, "click", function (e) {
                instance.deleteConnectionsForElement(this.getAttribute("rel"));
                jsPlumbUtil.consume(e);
            });

            instance.on(document.getElementById("clear"), "click", function (e) {
                instance.detachEveryConnection();
                showConnectionInfo("");
                jsPlumbUtil.consume(e);
            });
    });

    jsPlumb.fire("jsPlumbDemoLoaded", instance);

    document.getElementById("check-button").addEventListener("click", function () {

        //var d = instance.exportData();
        //console.log(instance.getAllConnections());

        var correct_connections_1_12 = [
            {
                "source": "ld1",
                "target": "ld12"
            },

            {
                "source": "ld12",
                "target": "ld1"
            }
        ];

        var correct_connections_1_13 = [
            {
                "source": "ld1",
                "target": "ld13"
            },
    
            {
                "source": "ld13",
                "target": "ld1"
            }
        ];

        var correct_connections_1_15 = [
            {
                "source": "ld1",
                "target": "ld15"
            },
    
            {
                "source": "ld15",
                "target": "ld1"
            }
        ];

        var correct_connections_2_3 = [
            {
                "source": "ld2",
                "target": "ld3"
            },
    
            {
                "source": "ld3",
                "target": "ld2"
            }
        ];

        var correct_connections_6_17 = [
            {
                "source": "ld6",
                "target": "ld17"
            },
    
            {
                "source": "ld17",
                "target": "ld6"
            }

        ];



        var correct_connections_7_11 = [
            {
                "source": "ld7",
                "target": "ld11"
            },
    
            {
                "source": "ld11",
                "target": "ld7"
            }
        
        ];

        var correct_connections_8_5 = [
            {
                "source": "ld8",
                "target": "ld5"
            },
    
            {
                "source": "ld5",
                "target": "ld8"
            }
        
        ];

        var correct_connections_9_14 = [
            {
                "source": "ld9",
                "target": "ld14"
            },
    
            {
                "source": "ld14",
                "target": "ld9"
            }
        
        ];

        var correct_connections_9_10 = [
            {
                "source": "ld9",
                "target": "ld10"
            },
    
            {
                "source": "ld10",
                "target": "ld9"
            }
        
        ];

        var correct_connections_14_10 = [
            {
                "source": "ld14",
                "target": "ld10"
            },
    
            {
                "source": "ld10",
                "target": "ld14"
            }
        
        ];

        var correct_connections_4_16 = [
            {
                "source": "ld4",
                "target": "ld16"
            },
    
            {
                "source": "ld16",
                "target": "ld4"
            }
        
        ];

        //a connection outside this will invalidate the circuit
        var allowed_connections = [
            {
                "source": "ld1",
                "target": "ld12"
            },
    
            {
                "source": "ld12",
                "target": "ld1"
            },
            
            {
                "source": "ld1",
                "target": "ld13"
            },

            {
                "source": "ld13",
                "target": "ld1"
            },

            {
                "source": "ld1",
                "target": "ld15"
            },

            {
                "source": "ld15",
                "target": "ld1"
            },

            {
                "source": "ld2",
                "target": "ld3"
            },

            {
                "source": "ld3",
                "target": "ld2"
            },

            {
                "source": "ld6",
                "target": "ld17"
            },

            {
                "source": "ld17",
                "target": "ld6"
            },






            {
                "source": "ld7",
                "target": "ld11"
            },

            {
                "source": "ld11",
                "target": "ld7"
            },

            {
                "source": "ld8",
                "target": "ld5"
            },

            {
                "source": "ld5",
                "target": "ld8"
            },

            {
                "source": "ld9",
                "target": "ld14"
            },

            {
                "source": "ld14",
                "target": "ld9"
            },

            {
                "source": "ld9",
                "target": "ld10"
            },

            {
                "source": "ld10",
                "target": "ld9"
            },

            {
                "source": "ld14",
                "target": "ld10"
            },

            {
                "source": "ld10",
                "target": "ld14"
            },

            {
                "source": "ld4",
                "target": "ld16"
            },

            {
                "source": "ld16",
                "target": "ld4"
            },
        ];

        var actual_connections = instance.getAllConnections();

        var is_connected_1_12 = false;
        var is_connected_1_13 = false;
        var is_connected_1_15 = false;
        var is_connected_2_3 = false;
        var is_connected_6_17 = false;

        var is_connected_7_11 = false;
        var is_connected_8_5 = false;
        var is_connected_9_14 = false;
        var is_connected_9_10 = false;
        var is_connected_14_10 = false;
        var is_connected_4_16 = false;

        var unallowed_connection_present = false;

        //checking for 1_12 connection
        actual_connections.forEach(function (connection) {
            var this_connection = {
                "source": connection.sourceId,
                "target": connection.targetId
            };

            if(!is_connected_1_12){
                is_connected_1_12 = correct_connections_1_12.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                  });
            }

           if(!unallowed_connection_present){
                unallowed_connection_present = !allowed_connections.find(function (conn) {
                    return conn.source == this_connection.source && conn.target === this_connection.target;
                });
            }
            // if this_connection exists in correct_connections
            // remove this connection from correct ones
            // continue
            // else
            // return false
        });

        //checking for 1_13 connection
        actual_connections.forEach(function (connection) {
            var this_connection = {
                "source": connection.sourceId,
                "target": connection.targetId
            };

            if(!is_connected_1_13){
                is_connected_1_13 = correct_connections_1_13.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                });
            }
            if(!unallowed_connection_present){
                unallowed_connection_present = !allowed_connections.find(function (conn) {
                    return conn.source == this_connection.source && conn.target === this_connection.target;
                });
            }
              // if this_connection exists in correct_connections
            // remove this connection from correct ones
            // continue
            // else
            // return false
        });

        //checking for 1_15 connection
        actual_connections.forEach(function (connection) {
            var this_connection = {
                "source": connection.sourceId,
                "target": connection.targetId
            };

            if(!is_connected_1_15){
                is_connected_1_15 = correct_connections_1_15.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                  });
            }

           if(!unallowed_connection_present){
                unallowed_connection_present = !allowed_connections.find(function (conn) {
                    return conn.source == this_connection.source && conn.target === this_connection.target;
                });
            }
            // if this_connection exists in correct_connections
            // remove this connection from correct ones
            // continue
            // else
            // return false
        });

        //checking for 2_3 connection
        actual_connections.forEach(function (connection) {
            var this_connection = {
                "source": connection.sourceId,
                "target": connection.targetId
            };

            if(!is_connected_2_3){
                is_connected_2_3 = correct_connections_2_3.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                  });
            }

           if(!unallowed_connection_present){
                unallowed_connection_present = !allowed_connections.find(function (conn) {
                    return conn.source == this_connection.source && conn.target === this_connection.target;
                });
            }
            // if this_connection exists in correct_connections
            // remove this connection from correct ones
            // continue
            // else
            // return false
        });

        //checking for 6_17 connection
        actual_connections.forEach(function (connection) {
            var this_connection = {
                "source": connection.sourceId,
                "target": connection.targetId
            };

            if(!is_connected_6_17){
                is_connected_6_17 = correct_connections_6_17.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                  });
            }

           if(!unallowed_connection_present){
                unallowed_connection_present = !allowed_connections.find(function (conn) {
                    return conn.source == this_connection.source && conn.target === this_connection.target;
                });
            }
            // if this_connection exists in correct_connections
            // remove this connection from correct ones
            // continue
            // else
            // return false
        });





        //checking for 7_11 connection
        actual_connections.forEach(function (connection) {
            var this_connection = {
                "source": connection.sourceId,
                "target": connection.targetId
            };

            if(!is_connected_7_11){
                is_connected_7_11 = correct_connections_7_11.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                  });
            }

           if(!unallowed_connection_present){
                unallowed_connection_present = !allowed_connections.find(function (conn) {
                    return conn.source == this_connection.source && conn.target === this_connection.target;
                });
            }
            // if this_connection exists in correct_connections
            // remove this connection from correct ones
            // continue
            // else
            // return false
        });

        //checking for 8_5 connection
        actual_connections.forEach(function (connection) {
            var this_connection = {
                "source": connection.sourceId,
                "target": connection.targetId
            };

            if(!is_connected_8_5){
                is_connected_8_5 = correct_connections_8_5.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                  });
            }

           if(!unallowed_connection_present){
                unallowed_connection_present = !allowed_connections.find(function (conn) {
                    return conn.source == this_connection.source && conn.target === this_connection.target;
                });
            }
            // if this_connection exists in correct_connections
            // remove this connection from correct ones
            // continue
            // else
            // return false
        });

        //checking for 9_14 connection
        actual_connections.forEach(function (connection) {
            var this_connection = {
                "source": connection.sourceId,
                "target": connection.targetId
            };

            if(!is_connected_9_14){
                is_connected_9_14 = correct_connections_9_14.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                  });
            }

           if(!unallowed_connection_present){
                unallowed_connection_present = !allowed_connections.find(function (conn) {
                    return conn.source == this_connection.source && conn.target === this_connection.target;
                });
            }
            // if this_connection exists in correct_connections
            // remove this connection from correct ones
            // continue
            // else
            // return false
        });

        //checking for 9_10 connection
        actual_connections.forEach(function (connection) {
            var this_connection = {
                "source": connection.sourceId,
                "target": connection.targetId
            };

            if(!is_connected_9_10){
                is_connected_9_10 = correct_connections_9_10.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                  });
            }

           if(!unallowed_connection_present){
                unallowed_connection_present = !allowed_connections.find(function (conn) {
                    return conn.source == this_connection.source && conn.target === this_connection.target;
                });
            }
            // if this_connection exists in correct_connections
            // remove this connection from correct ones
            // continue
            // else
            // return false
        });

        //checking for 14_10 connection
        actual_connections.forEach(function (connection) {
            var this_connection = {
                "source": connection.sourceId,
                "target": connection.targetId
            };

            if(!is_connected_14_10){
                is_connected_14_10 = correct_connections_14_10.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                  });
            }

           if(!unallowed_connection_present){
                unallowed_connection_present = !allowed_connections.find(function (conn) {
                    return conn.source == this_connection.source && conn.target === this_connection.target;
                });
            }
            // if this_connection exists in correct_connections
            // remove this connection from correct ones
            // continue
            // else
            // return false
        });

        //checking for 4_16 connection
        actual_connections.forEach(function (connection) {
            var this_connection = {
                "source": connection.sourceId,
                "target": connection.targetId
            };

            if(!is_connected_4_16){
                is_connected_4_16 = correct_connections_4_16.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                  });
            }

           if(!unallowed_connection_present){
                unallowed_connection_present = !allowed_connections.find(function (conn) {
                    return conn.source == this_connection.source && conn.target === this_connection.target;
                });
            }
            // if this_connection exists in correct_connections
            // remove this connection from correct ones
            // continue
            // else
            // return false
        });

        if (is_connected_1_12 && is_connected_1_13 && is_connected_1_15 && is_connected_2_3 && is_connected_6_17 && is_connected_7_11 && is_connected_8_5 && is_connected_9_14 && is_connected_9_10 && is_connected_14_10 && is_connected_4_16  && !unallowed_connection_present) 
        {
            fnccheck();
            rightconnection=true;
            alert("Correct connection proceed to take readings.");
            //document.getElementById("mcb_off").disabled = false;

            document.getElementById("led_l").src="push2.png";
            document.getElementById("range").disabled=false;
            document.getElementById("rem1").remove();
            document.getElementById("rem2").remove();
            document.getElementById("rem3").remove();
            document.getElementById("rem4").remove();
            document.getElementById("rem5").remove();
            document.getElementById("rem6").remove();
            document.getElementById("rem7").remove();
            document.getElementById("rem8").remove();
            document.getElementById("rem9").remove();
            document.getElementById("rem10").remove();
            document.getElementById("rem11").remove();
            document.getElementById("rem12").remove();
            document.getElementById("rem13").remove();
            document.getElementById("rem14").remove();
            document.getElementById("rem15").remove();
            document.getElementById("rem16").remove();
            document.getElementById("rem17").remove();
            
            

            } 
        else {
            //document.getElementById("mcb_off").disabled = true;
            alert("Incorrect Connections.");
            return;
            } 
    });

 });
}

