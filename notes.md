

ignore {
    add prop form
    - full name
    - address
    - prop nick name /o
    - contact 
    - prop cover pic /o?
    - airbnb link /o?
    - about prop /o
    - wifi code/scan?
}


to do
    - look into qr api
    - address autofill library
    - is tailwind worth it tho - no it is not, not at this point
    - phone num formatter
    - image storage?
    - figure out message sending stuff
    - progress banner for the host
    - acheivement badges
    

!!! really need to do
    - figure out login stuff
        - option to login/register on landing
        - host: must log in immediately to create property
        - guest: doesnt need to ever log in to view property, only needs to register to do advanced actions*

* advanced actions
    - submitting a question
    - save properties
    - other premium options that i have not thought of yet


**DISCUSS** guests could have alloted amount of properties they can view a month/year/ever before having to register for paid tier? that would mean they would have to register/sign in anytime they view property. 

**DISCUSS** What is redundent and what isnt? what features should be prioritzed even tho they might be redundent? what features should be put on the back burner even though they aren't remotely redundent?

pitch? : 
HomeTree is meant to be the middle man between Host and Guest for airbnb users. Guests can view frequently asked questions about the home, submit their own questions, and view guide books made by the Host. This is meant to illiminate issues with the guest trying to contact the host about minor things, like how to use kitchen appliences, so that the guest experience is more seamless.


host has {
    property
    General Info
}

property has {
    Host info
    Address
    About
    Etc
    Rooms
    General Questions
}

Rooms have{
    Name
    Description/image
    Questions
}

Guest *only* has account info, maybe saved properties