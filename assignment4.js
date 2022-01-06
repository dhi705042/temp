const facebookProfiles = [
{
firstName: 'Akash',
lastName: 'Agarwal',
number: '111111111',
likes: ['music', 'movies'],
location:'gurgaon',
hasDrivingLicense:false
},
{
firstName: 'Pritesh',
lastName: 'Kumar',
number: '222222222',
likes: ['code', 'driving'],
location:'noida',
hasDrivingLicense:false
},
{
firstName: 'Sabiha',
lastName: 'Khan',
number: '333333333',
location:'delhi',
hasDrivingLicense:false
},
{
firstName: 'Suyash',
lastName: 'Kashyap',
number: '444444444',
likes: ['travel', 'driving'],
location:'delhi',
hasDrivingLicense:true,
},
{
firstName: 'Jay',
likes: ['food', 'mobile'],
location:'faridabad',
hasDrivingLicense:true
}
]

for(i=0; i<facebookProfiles.length; i++){
   

const fullName = facebookProfile[i].firstName.concat(facebookProfile[i].lastName);

console.log(fullName);



}