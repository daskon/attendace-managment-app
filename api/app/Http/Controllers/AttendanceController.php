<?php

namespace App\Http\Controllers;

use App\Http\Requests\UpdateAttendanceRequest;
use App\Models\Attendance;
use DateTime;
use Illuminate\Http\Request;

class AttendanceController extends Controller
{
    /**
     * Store a newly created resource in storage.
     *
     * @param  \App\Http\Requests\StoreAttendanceRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        try {
            foreach($request->all() as $v){
                $data[] = [
                    'employee_id' => $v['EmpId'],
                    'CheckIn' => $this->getHours($v['CheckIn']),
                    'CheckOut' => $this->getHours($v['CheckOut']),
                    'TotalHours' => $this->getTotalHours(
                                                            $this->getHours($v['CheckIn']),
                                                            $this->getHours($v['CheckOut'])
                                                        )
                ];
            }
            Attendance::insert($data);
            return response()->json('Record added successfully');
        } catch (\Illuminate\Database\QueryException $exception) {
            return $exception->errorInfo;
        }
    }

    /**
     * get Hours from decimal value
     *
     * @param  mixed $decimal
     * @return void
     */
    public function getHours($decimal)
    {
        $sec = intval($decimal * (24 * 60 * 60));
        $date = new DateTime("today +$sec seconds");
        return $date->format('H:i');
    }

    /**
     * get Total Hours between two times
     *
     * @param  mixed $from
     * @param  mixed $to
     * @return void
     */
    public function getTotalHours($from,$to)
    {
        $chkIn = strtotime($from);
        $chkOut = strtotime($to);
        $difference = round(abs($chkIn - $chkOut) / 3600, 2);
        return $difference;
    }

    /**
     * get all attendance
     *
     * @return void
     */
    public function allAttendace()
    {
        $result = Attendance::all();
        return $result;
    }
}
