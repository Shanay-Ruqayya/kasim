<?php if ( ! defined( 'ABSPATH' ) ) exit;

class PFORM_Fields_SectionTitle extends PFORM_Abstracts_Fields
{   

    public function __construct()
    {
        $this->name     = esc_html__( 'Section Title', 'pie-forms' );
		$this->type     = 'sectionTitle';
		$this->icon     = 'sectionTitle';
		$this->order    = 150;
        $this->group    = 'advanced';
        $this->is_pro   = true;

        parent::__construct();
    }
}