//by Pietro Chirio for HotBlack Robotics//

var cmdMotor = new ROSLIB.Topic({
  ros : ros,
  name : '/'+ robot.name + '/coordinates',
  messageType : 'geometry_msgs/Twist'
});

var read_value = function(v) {
  if (isNaN(v)) return 0;
  else if (v > 255) return 255;
  else if (v < -255) return -255;
  return v;
};


var setMotors = function(element, num) {
  console.log("Motor 1", document.getElementById("Motor1").value);
  console.log("Motor 2", document.getElementById("Motor2").value);
  console.log("Motor 3", document.getElementById("Motor3").value);


  var Twist = new ROSLIB.Message({
    angular : {
          x : 0,
          y : 0,
          z : 0,
        },
    linear : {
          x : read_value(Number($("#Motor1").val())),
          y : read_value(Number($("#Motor2").val())),
          z : read_value(Number($("#Motor3").val()))
        }
  });
  console.log(Twist);
  cmdMotor.publish(Twist);
};


 