$(document).ready(function () {
   // debugger;
    var UserId = $('#selectnumber').val();
    $.ajax({
        type: "post",
        url: "/Location/UserList",
        data: { userId: UserId },
        datatype: "json",
        traditional: true,
        success: function (data) {
            district = '<option value="-1">Select Employee</option>';
            for (var i = 0; i < data.length; i++) {
                district = district + '<option value=' + data[i].Value + '>' + data[i].Text + '</option>';
            }
            //district = district + '</select>';
            $('#selectnumber').html(district);
        }
    });


  
  
    $('#selecttype').html('<option value=0>All Employee</option><option value=V>Vehicle Driver</option><option value=S>Street Sweeping</option><option value=L>Liquid Waste</option>');
        
    $("#demoGrid").DataTable({
        "sDom": "ltipr",
        "order": [[15, "desc"]],
        "processing": true, // for show progress bar
        "serverSide": true, // for process server side
        "filter": true, // this is for disable filter (search box)
        "orderMulti": false, // for disable multiple column at once
        //"pageLength": 10,

        "ajax": {
            "url": "/Datable/GetJqGridJson?rn=Attendence",
            "type": "POST",
            "datatype": "json"
        },

        "columnDefs":
        [{
            "targets": [0],
            "visible": false,
            "searchable": false
        }, {
            "targets": [6],
            "visible": false,
            "searchable": false
        }, {
            "targets": [7],
            "visible": false,
            "searchable": false
        }, {
            "targets": [8],
            "visible": false,
            "searchable": false
        },
        {
            "targets": [9],
            "visible": false,
            "searchable": false
        },
        {
             "targets": [10],
             "orderable": false
        },
        {
            "targets": [14],
            "visible": false,
            "searchable": false
        },
        {
            "targets": [15],
            "visible": false,
            "searchable": false,
            "type": "date-eu"
        }
        ],


        "columns": [
            { "data": "daID", "name": "daID", "autoWidth": true },
            {
                "data": "employeeType", "name": "EmployeeType", "autoWidth": true, "render": function (data, type, full, meta) {

                    if (full["employeeType"] == "V") {

                        return 'Vehicle Driver';

                    }
                    if (full["employeeType"] == "S") {

                        return 'Street Sweeping';

                    }
                    if (full["employeeType"] == "L") {

                        return 'Liquid Waste';

                    } else {
                        return 'Not Available';
                    }
                }
            },
              { "data": "userName", "name": "userName", "autoWidth": true },
              { "data": "daDate", "name": "daDate", "autoWidth": true },
              { "data": "startTime", "name": "startTime", "autoWidth": true },
              { "data": "daEndDate", "name": "daEndDate", "autoWidth": true },
              { "data": "endTime", "name": "endTime", "autoWidth": true },
              { "data": "startLat", "name": "endstartLatTime", "autoWidth": true },
              { "data": "startLong", "name": "startLong", "autoWidth": true },
              { "data": "endLat", "name": "endLat", "autoWidth": true },
              { "data": "endLong", "name": "endLong", "autoWidth": true },
        
              { "render": function (data, type, full, meta) { return '<a  data-toggle="modal" class="tooltip1" style="cursor:pointer" onclick="house_route(' + full["daID"] + ')" ><i class="material-icons location-icon">location_on</i><span class="tooltiptext1">Route</span> </a>'; }, "width": "10%" },
              { "render": function (data, type, full, meta) { return '<a  data-toggle="modal" class="tooltip1" style="cursor:pointer" onclick="user_route(' + full["daID"] + ')" ><i class="material-icons location-icon">location_on</i><span class="tooltiptext1">Route</span> </a>'; }, "width": "10%" },

              { "data": "vtId", "name": "vtId", "autoWidth": true },
              { "data": "vehicleNumber", "name": "vehicleNumber", "autoWidth": true },
              { "data": "CompareDate", "name": "daID", "autoWidth": true },
              { "data": "daDateTIme", "name": "daDateTIme", "autoWidth": true },
             
        ],
       // Sort: "locId DESC"
    });


    $("#selecttype").change(function () {
        debugger;
        var Name = $('#selecttype').val();
        $.ajax({
            type: "post",
            url: "/Attendence/EmployeeNameList?ename=" + Name + "",
            data: { Name: Name },
            datatype: "json",
            traditional: true,
            success: function (data) {
                employee = '<option value="-1">Select Employee</option>';
                employee = '<option value="-1">Select Employee</option>';
                for (var i = 0; i < data.length; i++) {
                    employee = employee + '<option value="' + data[i].Value + '">' + data[i].Text.replace(new RegExp("(?:\\b|_)([a-z])", 'g'), function ($2) { return $2.toUpperCase(); }); + '</option>';
                }
                $('#selectnumber').html(employee);
            }

        });
    });
 
});

function test(id) {
    window.location.href = "/Attendence/Location?daId="+id;
};

function user_route(id) {
    window.location.href = "/Attendence/UserRoute?daId=" + id;
};

function house_route(id) {
    window.location.href = "/Attendence/HouseRoute?daId=" + id;
};
function map(a) {
    window.location.href = "/Location/viewLocation?teamId=" + a;

};
//////////////////////////////////////////////////////////////////////////////
function showInventoriesGrid() { 
    Search(); 
}
 
function Search() {
    var txt_fdate, txt_tdate, Client, UserId , SearchType;
    var name = [];
    var arr = [$('#txt_fdate').val(), $('#txt_tdate').val()];

    for (var i = 0; i <= arr.length - 1; i++) {
        name = arr[i].split("/");
        arr[i] = name[1] + "/" + name[0] + "/" + name[2];
    }

    txt_fdate = arr[0];
    txt_tdate = arr[1];
    UserId = $('#selectnumber').val();
    Client = " ";
    NesEvent = " ";
    var Product = "";
    var catProduct = "";
    SearchType = $('#selecttype').val();
    var value = txt_fdate + "," + txt_tdate + "," + UserId + "," + $("#s").val() + SearchType ;//txt_fdate + "," + txt_tdate + "," + UserId + "," + Client + "," + NesEvent + "," + Product + "," + catProduct + "," + 1;
    // alert(value );
    oTable = $('#demoGrid').DataTable();
    oTable.search(value).draw();
    oTable.search("");
    document.getElementById('USER_ID_FK').value = -1;
}


