import { Meteor } from 'meteor/meteor';

Meteor.startup(() => {
  // code to run on server at startup
});

Meteor.methods({
	'insertMemberData': function(memberNameVar, memberGraduationVar) {
		MemberList.insert({
			name: memberNameVar,
			graduated: memberGraduationVar
		});
	},
	'deleteMemberData': function(memberNameVar) {
		MemberList.remove({name: memberNameVar});
	},
	'insertAllPhotos': function() {
		var picnames = ["images/ind1.jpg", "images/ind2.jpg", "images/ind4.jpg", "images/ind7.jpg"];
		for(var i = 0; i < picnames.length; i++) {
			PhotoList.insert({
				imgsrc: picnames[i]
			});
		}
	},
	'insertPhotoData': function(photoVar) {
		PhotoList.insert({
			imgsrc: photoVar
		});
	}
});