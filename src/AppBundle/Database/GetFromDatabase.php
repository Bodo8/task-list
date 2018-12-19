<?php
/**
 * Created by PhpStorm.
 * User: boguslaw
 * Date: 18.12.18
 * Time: 21:25
 */

namespace AppBundle\Database;


interface GetFromDatabase
{
    public function getAllTask();

    public function getTasksFromGivenDate();
}