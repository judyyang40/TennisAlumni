Template.memlist.helpers({
	'member': function(){
		return MemberList.find({}, {sort: {graduated: 1}})
	}
});

Template.memlist.events({
	'click .mem': function(){
		var memberId = this._id;
		Session.set('selectedMember', memberId);
	}
});

Template.registerMemberForm.events({
	'submit form':function(){
		event.preventDefault();
		var memberNameVar = event.target.memberName.value;
		var memberGraduationVar = event.target.graduationYear.value;
		Meteor.call('insertMemberData', memberNameVar, memberGraduationVar);
	}
});

$(function() {
	$('.slide').cycle({
		fx: 'fade',
		speed: 2500
	});
});

Template.photos.helpers({
	'img': function() {
		return PhotoList.find({})
	}
});