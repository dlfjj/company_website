<?php

namespace App\Http\Controllers;

use App\ContactForm;
use App\Mail\ContactFormMail;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Mail;

class ContactFormController extends Controller
{
    public function submit(Request $request) {

        Log::info('Showing your request: '.$request);


//        {"name":"jack","email":"dlfjj123@gmail.com","company":"pineapple","state":"Alaska","zipCode":"89509","message":"we love this fuck face"}

        $this->validate($request, [
            'name' => 'required|string',
            'email' => 'required|email',
            'message' => 'required',
        ]);

        $mail_data = array(
            'from_name' => "Jiajie Fan,Shelly, Achim",
            'from_email' => "americandunnage@n55lwi.info",
            'subject' => "American Dunnage Inc. Contact Submit Form",
            'mail_body' => $request->name.'  '.$request->email.' '.$request->message.' '.$request->company.' '.$request->zipCode.' '.$request->state
        );
//
        $message = new ContactFormMail($mail_data);
        Mail::to('info@americandunnage.com')->send($message);
//        Mail::to('dlfjj123@gmail.com')->send($message);



//        record the contactform message to database
        $newContact = new ContactForm();

        $newContact->name = $request->name;
        $newContact->email = $request->email;
        $newContact->company = $request->company;
        $newContact->state = $request->state;
        $newContact->zipCode = $request->zipCode;
        $newContact->message = $request->message;

        $newContact->save();
        /*
          Add mail functionality here.
        */
        return response()->json(null, 200);
    }

    public function testmail()
    {
//        $mail_data = array(
//            'from_name' => "Jiajie Fan,Shelly, Achim",
//            'from_email' => "americandunnage@n55lwi.info",
//            'subject' => "American Dunnage Inc. Contact Submit Form",
//            'mail_body' => "I did it. I am the king."
//        );
////
//        $message = new ContactFormMail($mail_data);
//        Mail::to('dlfjj123@gmail.com')->send($message);
//        $data = [
//            'title' => 'Test email',
//            'content' => 'content'
//        ];
//        Mail::send('mails.email', $data, function($message)
//        {
//            $message->to('dlfjj123@gmail.com', 'jack')->subject('hello how are you?');
//        });
//        return "You did it";
    }
}
