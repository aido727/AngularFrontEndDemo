export interface ResultObject {
	has_more: boolean,
	items: Question[],
	quota_max: number,
	quota_remaining: number
}

export interface Question {
	accepted_answer_id: number,
	answer_count: number,
	content_license: string,
	creation_date: number,
	is_answered: boolean,
	last_activity_date: number,
	last_edit_date: number,
	link: string,
	owner: Owner,
	protected_date: number,
	question_id: number,
	score: number,
	tags: string[],
	title: string,
	view_count: number
}

export interface Owner {
	accept_rate: number,
	display_name: string,
	link: string,
	profile_image: string,
	reputation: number,
	user_id: number,
	user_type: string
}